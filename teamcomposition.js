class TeamComposition extends Descriptor {
  name;
  members;

  // overall composition name
  compositionName;

  // composition component names
  composition = [];

  // overall metric of sustain(negative) vs mobility(positive)
  mobility;

  // individual metrics
  sustain;
  range;
  mobile;

  // rounded percents of sustain, range, and mobile
  brawl;
  poke;
  dive;

  // members by role
  roleMembers = {
    [attribute.role.tank]: [],
    [attribute.role.damage]: [],
    [attribute.role.support]: [],
  }

  // members by class
  classMembers = {
    [attribute.class.tank.main]: [],
    [attribute.class.tank.off]: [],

    [attribute.class.damage.hitscan]: [],
    [attribute.class.damage.flex]: [],

    [attribute.class.support.utility]: [],
    [attribute.class.support.healing]: [],
  }

  // other
  archetypes;
  count;
  heroWeights;

  constructor(name, members) {
    super(name);
    this.members = members;

    this.sustain = 0;
    this.range = 0;
    this.mobile = 0;

    if (members.length === 0) return;

    this.flags = [];
    this.archetypes = new Set();
    this.count = {};

    let total = 0;

    for (const [i, member] of members.entries()) {
      // warn problematic member
      if (!member || member === undefined || !member.playstyle || !member.healing) console.warn('member', i, 'of', name, 'in', members);

      // add member to lookup tables
      this.roleMembers[member.role].push(member);
      this.classMembers[member.class].push(member);

      this.count[member.role] = (this.count[member.role] || 0) + 1;
      this.count[member.class] = (this.count[member.class] || 0) + 1;

      // weights for how much the playstyle and healing-playstyle impact the team stats
      const playstyleWeight = TeamComposition.weights.playstyle[member.class];
      const healingWeight = TeamComposition.weights.healing[member.class];

      this.sustain += member.playstyle.sustain * playstyleWeight;
      this.range += member.playstyle.range * playstyleWeight;
      this.mobile += member.playstyle.mobile * playstyleWeight;

      this.sustain += member.healing.sustain * healingWeight;
      this.range += member.healing.range * healingWeight;
      this.mobile += member.healing.mobile * healingWeight;

      total += playstyleWeight + healingWeight;

      // add archetypes
      for (const archetype of member.archetypes) {
        this.archetypes.add(archetype);
        this.count[archetype] = (this.count[archetype] || 0) + 1;
      }
    }

    this.sustain /= total;
    this.range /= total;
    this.mobile /= total;

    this.brawl = Math.round(this.sustain * 100);
    this.poke = Math.round(this.range * 100);
    this.dive = Math.round(this.mobile * 100);

    this.classify();
    this.compositionName = this.getTeamCompName();
  }

  classify() {
    this.composition = [];
    this.mobility = this.mobile - this.sustain;

    const weights = this.weights = [
      {name: 'Brawl', score: this.sustain},
      {name: 'Poke', score: this.range},
      {name: 'Dive', score: this.mobile},
    ];

    weights.sort((a,b)=>b.score - a.score);

    // normalize for saftey
    const total = util.sumArray(weights.map(x=>x.score));

    let n = 0;
    let acc = 0;
    let focus;

    // select team composition
    for (const weight of weights) {
      n++;
      this.composition.push(weight.name);
      acc += weight.score/total;
      const ratio = (n+1)/(n+2);
      if (util.is.approximately.greaterThan(acc, ratio, TeamComposition.significance)) break;
    }
  }

  getTeamCompName() {
    let composition = this.composition.map(x=>{
      if (this.archetypes.has(attribute.archetype.rush) && x === 'Brawl') return 'Rush';
      if (this.archetypes.has(attribute.archetype.rush) && x === 'Poke') return 'Spam';
      return x;
    });

    if (composition[2]) return 'Hybrid'
    if (composition[1]) return `${composition[0]}-${composition[1]} Hybrid`;
    return composition[0];
  }

  equals(team) {
    if (this.members.length != team.members.length) return false;
    for (const hero of this.members) {
      if (!team.members.includes(hero)) return false;
    }
    return true;
  }

  measure(hero) {
    if (hero.role === attribute.role.support) {
      const utility = this.measurePlaystyle(hero.playstyle);
      const healing = this.measurePlaystyle(hero.healing);
      return Math.max(utility, healing);
    }

    return this.measurePlaystyle(hero.playstyle);
  }

  measurePlaystyle(playstyle) {
    const delta = Math.abs(this.mobility - playstyle.measure());
    return 1 - (delta)/2;
  }

  static weights = {
    playstyle: {
      [attribute.class.tank.main]: 1,
      [attribute.class.tank.off]: 1,

      [attribute.class.damage.hitscan]: 1,
      [attribute.class.damage.flex]: 1,

      [attribute.class.support.utility]: 1,
      [attribute.class.support.healing]: 0,
    },

    healing: {
      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 0,
      [attribute.class.damage.flex]: 0,

      [attribute.class.support.utility]: 0,
      [attribute.class.support.healing]: 1,
    },
  }

  static significance = -6;
}
