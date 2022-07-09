class TeamComposition extends Descriptor {
  // team composition member heros
  members;

  // modern classifcation score
  mobility;
  // classic Brawl/Poke/Dive classifcation
  composition;

  // the primary team composition
  primary;
  // the secondary team composition in a hybrid composition
  hybrid;
  // variations on team compositions
  flags;

  // modern scores
  sustain;
  range;
  mobile;

  // scores for each team composition
  brawl;
  poke;
  dive;

  strengths
  vulnerabilities

  weights

  archetypes;

  size;
  roles;
  mode;

  constructor(name, members) {
    super(name);
    this.members = members;

    this.sustain = 0;
    this.range = 0;
    this.mobile = 0;

    this.brawl = 0;
    this.poke = 0;
    this.dive = 0;

    this.flags = [];
    this.archetypes = new Set();

    for (const x of members) {
      const playstyle = x.playstyle;
      this.sustain += playstyle.sustain;
      this.range += playstyle.range;
      this.mobile += playstyle.mobile;

      this.brawl += playstyle.brawl;
      this.poke  += playstyle.poke;
      this.dive  += playstyle.dive;

      this.flags = [this.flags, playstyle.flags].flat();

      for (const archetype of x.archetypes) this.archetypes.add(archetype);
    };

    this.normalize();
    this.classify();

    this.count();
    this.getStrengths();
    this.getWeakness();
  }

  normalize() {
    this.sustain /= this.members.length;
    this.range /= this.members.length;
    this.mobile /= this.members.length;

    const total = this.brawl + this.poke + this.dive;
    this.brawl = Math.round(this.brawl/total * 100);
    this.poke = Math.round(this.poke/total * 100);
    this.dive = Math.round(this.dive/total * 100);
  }

  classify() {
    this.mobility = Math.round(100 * (this.mobile - this.sustain));

    const weights = this.weights = [
      {name: 'Poke', score: this.poke},
      {name: 'Brawl', score: this.brawl},
      {name: 'Dive', score: this.dive},
    ];

    weights.sort((a,b)=>b.score - a.score);

    this.strength = weights[0].score;
    const focus = this.focus = Math.round(weights[0].score/1 + weights[1].score/2);

    let primary = weights[0].name;
    let secondary = weights[1].name;

    this.primary = primary;
    this.hybrid = false;

    if (focus >= 60 && focus <= 75) this.hybrid = secondary;
    if (focus < 50) this.primary = 'hybrid';

    if (this.flags.includes('brawl_to_rush') && primary === 'Brawl') this.flags.push('rush');
    if (this.flags.includes('poke_to_spam') && primary === 'Poke') this.flags.push('spam');

    this.composition = this.getTeamCompName();
  }

  getTeamCompName() {
    let result = [];

    let primary = this.primary;
    let hybrid = this.hybrid;

    if (this.flags.includes('rush')) primary = 'Rush';
    if (this.flags.includes('spam')) primary = 'Spam';

    if (this.hybrid) result.push(`${primary}-${hybrid} Hybrid`);
    else result.push(primary);

    return result.join(' ');
  }

  count() {
    const n = {
      total: 0,
      tank: {total: 0, main: 0, off: 0},
      damage: {total: 0, hitscan: 0, flex: 0},
      healer: {total: 0, main: 0, off: 0},
      support: {main: 0, flex: 0},
      antidive: 0,
      dive_target: 0,
      defensiveUlt: 0,
    };

    for (const x of this.members) {
      n.total++;
      if (x.role === attribute.role.tank) n.tank.total++;
      if (x.class === attribute.class.tank.main) n.tank.main++;
      if (x.class === attribute.class.tank.off) n.tank.off++;

      if (x.role === attribute.role.damage) n.damage.total++;
      if (x.class === attribute.class.damage.hitscan) n.damage.hitscan++;
      if (x.class === attribute.class.damage.flex) n.damage.flex++;

      if (x.role === attribute.role.support) n.healer.total++;
      if (x.class === attribute.class.healer.main) n.healer.main++;
      if (x.class === attribute.class.healer.off) n.healer.off++;

      if (x.archetypes.includes(attribute.archetype.support.main)) n.support.main++;
      if (x.archetypes.includes(attribute.archetype.support.flex)) n.support.flex++;

      if (x.archetypes.includes(attribute.archetype.antidive)) n.antidive++;
      if (x.archetypes.includes(attribute.archetype.dive_target)) n.dive_target++;
      if (x.archetypes.includes(attribute.archetype.defensiveUlt)) n.defensiveUlt++;
    }

    this.n = n;
  }

  getWeakness() {
    const weakness = [];

    const n = this.n;

    this.size = n.total;
    this.roles = `${n.tank.total}-${n.damage.total}-${n.healer.total}`

    if (this.roles === '2-2-2' || this.roles === '1-2-2') this.mode = 'Role Queue';
    else this.mode = 'Open Queue';

    // tank weakness
    if (n.tank.total < 1) weakness.push('no_tank');
    else if (this.size === 6) {
      if (n.tank.main < 1) weakness.push('no_main_tank');
      if (n.tank.off < 1) weakness.push('no_off_tank');
    }
    if (!this.archetypes.has(attribute.archetype.tank.mitigation)) weakness.push('low_mitigation');

    // damage weakness
    if (n.damage.hitscan < 1) weakness.push('no_hitscan_dps');
    if (n.damage.total > 1) {
      if (n.damage.flex < 1) weakness.push('no_flex_dps');
    }

    // support weakness
    if (n.healer.total < 2) weakness.push('low_support');
    else {
      if (n.healer.total < 3) {
        if (n.healer.main < 1) weakness.push('no_main_healer');
      }

      if (n.support.main < 1) weakness.push('no_main_support');
    }

    // brawl weakness
    if (this.primary === 'Brawl' && !this.hybrid) {
      if (!this.archetypes.has(attribute.archetype.support.area)) weakness.push('no_aoe_support_brawl');
    }

    // dive weakness
    if (this.primary === 'Dive' && !this.hybrid) {
      if (!this.archetypes.has(attribute.archetype.support.range)) weakness.push('no_ranged_support_dive');
    }

    // poke weakness
    if (this.primary === 'Poke' && !this.hybrid) {
      if (!this.archetypes.has(attribute.archetype.antidive)) weakness.push('no_anti_dive_poke');
    }

    // ult weakness
    if (!this.archetypes.has(attribute.archetype.defensiveUlt)) weakness.push('no_defensive_ult');

    // mobility/frontline weakness
    if (this.mobility < 25) weakness.push('low_mobility');
    else weakness.push('low_frontline');

    // dive target + no anti dive
    if (n.dive_target > n.antidive) weakness.push('diveable');

    const expandWeakness = (x) => vulnerabilities[x];

    this.vulnerabilities = weakness.reverse().map(expandWeakness);
  }

  getStrengths() {
    const result = [];

    if (this.n.antidive > 2) result.push('antidive_multi');
    else if (this.n.antidive > 1) result.push('antidive');
    if (this.n.defensiveUlt > 0) result.push('defensive_ult');

    if (this.primary === 'Brawl') result.push('sustain');
    if (this.primary === 'Poke') result.push('range');
    if (this.primary === 'Dive') result.push('mobility');

    if (this.hybrid) {
      if (this.hybrid === 'Brawl') result.push('sustain_hybrid');
      if (this.hybrid === 'Poke') result.push('range_hybrid');
      if (this.hybrid === 'Dive') result.push('mobility_hybrid');
    }

    const expandStrength = (x) => strengths[x];

    this.strengths = result.reverse().map(expandStrength);
  }

  inspect() {
    return {
      composition: this.composition,
      mobility: this.mobility,
      focus: this.focus,
      strengths: this.strengths,
      vulnerabilities: this.vulnerabilities,
      members: this.members.map(d=>d.name.full),

      strength: this.strength,
      primary: this.primary,
      hybrid: this.hybrid,
      roles: this.roles,
      flags: this.flags,
      weights: {
        primary: this.weights[0],
        secondary: this.weights[1],
        tertiary: this.weights[2],
      },
    }
  }
}
