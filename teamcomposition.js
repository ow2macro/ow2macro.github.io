class TeamComposition extends Descriptor {
  // team composition member heros
  members;

  // modern classifcation score
  mobility;
  // mobility vs power scores
  scores;

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

  strengths;
  vulnerabilities;

  weights;

  archetypes;

  size;
  roles;
  mode;

  roleMembers;

  constructor(name, members) {
    super(name);
    this.members = members;

    this.sustain = 0;
    this.range = 0;
    this.mobile = 0;

    this.flags = [];
    this.archetypes = new Set();

    this.scores = {};

    const roleMembers = this.roleMembers = {
      Tank: [],
      Damage: [],
      Support: [],
    };

    for (const [i, member] of members.entries()) {
      const x = member;
      if (!x || x === undefined || !x.playstyle) console.warn('member', i, 'of', name, x, 'in', members);

      roleMembers[member.role.full].push(member);
      this.sustain += member.playstyle.sustain;
      this.range += member.playstyle.range;
      this.mobile += member.playstyle.mobile;

      for (const archetype of x.archetypes) this.archetypes.add(archetype);
    }

    this.sustain /= this.members.length;
    this.range /= this.members.length;
    this.mobile /= this.members.length;

    this.brawl = Math.round(this.sustain * 100);
    this.poke = Math.round(this.range * 100);
    this.dive = Math.round(this.mobile * 100);

    this.classify();

    this.count();
    this.getStrengths();
    this.getWeakness();
  }

  classify() {
    this.mobility = 100 * (this.mobile - this.sustain);

    const weights = this.weights = [
      {name: 'Brawl', score: this.sustain},
      {name: 'Poke', score: this.range},
      {name: 'Dive', score: this.mobile},
    ];

    weights.sort((a,b)=>b.score - a.score);

    const total = weights[0].score + weights[1].score + weights[2].score;

    // helper functions
    const add = (acc, a) => acc + a;
    const calcFocus = (n) => {
      /**
       * TODO: clarify
       * compare [0...n]/total & (n+1)/(n+2)
       * ie [1]/3 & 2/3, [1+2]/3 & 3/4
       */
      const selected = weights.slice(0, n).map(x=>x.score).reduce(add, 0)/total;
      const ratio = (n+1)/(n+2);
      return selected-ratio;
    }

    let primary = weights[0].name;
    let secondary = weights[1].name;

    this.focus = calcFocus(1);
    this.focusSecondary = calcFocus(2);

    this.primary = primary;
    if (this.focus > 0) this.hybrid = false;
    else if (this.focusSecondary > 0) this.hybrid = secondary;
    else {
      this.primary = 'Hybrid';
      this.hybrid = false
    };

    if (this.archetypes.has(attribute.archetype.rush) && this.primary === 'Brawl') this.flags.push('rush');
    if (this.archetypes.has(attribute.archetype.spam) && this.primary === 'Poke') this.flags.push('spam');

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
    if (this.mobility < 0) weakness.push('low_mobility');
    else weakness.push('low_frontline');

    // dive target + no anti dive
    if (n.dive_target > n.antidive+1) weakness.push('diveable');

    const expandWeakness = (x) => vulnerabilities[x];

    this.vulnerabilities = weakness.reverse().map(expandWeakness);
  }

  getStrengths() {
    const result = [];

    if (this.n.antidive > 2) result.push('antidive_multi');
    else if (this.n.antidive > 1) result.push('antidive');
    if (this.n.defensiveUlt > 0) result.push('defensive_ult');

    if (this.hybrid) {
      if (this.hybrid === 'Brawl') result.push('sustain_hybrid');
      if (this.hybrid === 'Poke') result.push('range_hybrid');
      if (this.hybrid === 'Dive') result.push('mobility_hybrid');
    }

    if (this.primary === 'Brawl') result.push('sustain');
    if (this.primary === 'Poke') result.push('range');
    if (this.primary === 'Dive') result.push('mobility');

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

      brawl: this.brawl/100,
      poke: this.poke/100,
      dive: this.dive/100,

      sustain: this.sustain,
      range: this.range,
      mobile: this.mobile,

      scores: this.scores,

      weights: {
        primary: this.weights[0],
        secondary: this.weights[1],
        tertiary: this.weights[2],
      },
    }
  }

  equals(team) {
    if (this.members.length != team.members.length) return false;
    for (const hero of this.members) {
      if (!team.members.includes(hero)) return false;
    }
    return true;
  }
}
