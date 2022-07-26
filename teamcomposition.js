class TeamComposition extends Descriptor {
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

  // members by role
  roleMembers = {};

  // members by class
  classMembers = {};

  // other
  archetypes;
  count;
  heroWeights;

  interactions;
  interactionBins;
  synergyScore;

  /**
   * @param {string} name
   * @param {Array | Set} members
   */
  constructor(name, members, datapool) {
    super(name);
    this.members = new Set(members);
    this.datapool = datapool;
    this.update();
  }

  reset() {
    this.members = new Set();
    this.update();
  }

  add(hero) {
    this.members.add(hero);
    this.update();
  }

  remove(hero) {
    this.members.remove(hero);
    this.update();
  }

  update() {
    this.#reset();
    if (this.members.size < 1) return;

    for (const member of this.members) {
      // add member to lookup tables
      this.roleMembers[member.role].push(member);
      this.classMembers[member.class].push(member);

      this.count[member.role] ??= 0;
      this.count[member.role]++;

      this.count[member.class] ??= 0;
      this.count[member.class]++;

      // weights for how much the playstyle and healing-playstyle impact the team stats
      const weights = TeamComposition.getWeights(TeamComposition.weights, member);
      this.accumulate(weights, member);

      // add archetypes
      for (const archetype of member.archetypes) {
        if (!archetype) console.warn('unset archetype', member)
        this.archetypes.add(archetype);
        this.count[archetype] ??= 0;
        this.count[archetype]++;
      }
    }

    this.normalize();

    // calculate mobility score
    this.mobility = this.mobile - this.sustain;

    const values = this.normalizedMetrics();
    const weights = _.sortBy(Object.keys(values).map(metric=>({metric, value: values[metric]})), x=>x.value);
    this.weights = weights;
    this.composition = weights.map(x=>x.metric).reverse();

    const target = 2/3;

    // pop compositions that are less-than target % of the largest composition
    for (let n = 0; n < weights.length; n++) {
      const current = weights[n];
      if (util.is.greaterThan(current.value, target)) break;
      this.composition.pop();
    }

    this.compositionName = this.#getCompositionName();
    this.interactions = this.getInteractions(this.datapool);
    this.interactionBins = this.binInteractions(this.interactions);
  }

  accumulate(weights, hero) {
    this.sustain += hero.playstyle.sustain * weights.playstyle;
    this.range += hero.playstyle.range * weights.playstyle;
    this.mobile += hero.playstyle.mobile * weights.playstyle;

    this.sustain += hero.utility.sustain * weights.utility;
    this.range += hero.utility.range * weights.utility;
    this.mobile += hero.utility.mobile * weights.utility;

    this.sustain += hero.healing.sustain * weights.healing;
    this.range += hero.healing.range * weights.healing;
    this.mobile += hero.healing.mobile * weights.healing;

    this.total += weights.total;
  }

  normalize() {
    this.sustain /= this.total;
    this.range /= this.total;
    this.mobile /= this.total;
  }

  getInteractions(datapool) {
    if (!datapool) return [];
    const getInteractions = hero => datapool.interactions.allied.get(hero);
    const testInteraction = interaction => interaction.heros.map(pair=>this.members.has(pair)).reduce(util.and);
    const weight = interaction => interaction.weight || -1;
    const roles = [
      attribute.role.tank,
      attribute.role.damage,
      attribute.role.support,
    ]

    const roleSort = interaction => interaction.heros.map(hero=>roles.indexOf(hero.role)).reduce(util.add);

    return _.sortBy(
      _.sortBy(_.uniq(this.getMembers().map(getInteractions).flat().filter(testInteraction)), weight).reverse(),
      roleSort
    );
  }

  binInteractions(interactions) {
    return _.mergeWith({}, ...interactions.map(
      interaction => ({[interaction.name]: [interaction]})
    ), util.arrayMerge);
  }

  #reset() {
    this.sustain = 0;
    this.range = 0;
    this.mobile = 0;
    this.total = 0;

    this.composition = [];
    this.compositionName = '';

    this.weights = [];

    this.roleMembers = {
      [attribute.role.tank]: [],
      [attribute.role.damage]: [],
      [attribute.role.support]: [],
    }

    this.classMembers = {
      [attribute.class.tank.main]: [],
      [attribute.class.tank.off]: [],

      [attribute.class.damage.hitscan]: [],
      [attribute.class.damage.flex]: [],

      [attribute.class.support.utility]: [],
      [attribute.class.support.healing]: [],
    }

    this.flags = [];
    this.archetypes = new Set();
    this.count = {
      [attribute.role.tank]: 0,
      [attribute.role.damage]: 0,
      [attribute.role.support]: 0,

      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 0,
      [attribute.class.damage.flex]: 0,

      [attribute.class.support.utility]: 0,
      [attribute.class.support.healing]: 0,
    };
  }

  #getCompositionName() {
    let composition = this.composition.map(x=>{

      if (x === 'sustain') {
        if (this.archetypes.has(attribute.archetype.rush))
          return 'Rush';
        else
          return 'Brawl';
      }

      if (x === 'range') {
        if (this.archetypes.has(attribute.archetype.spam))
          return 'Spam';
        else
          return 'Poke';
      }

      if (x === 'mobile') {
        if (this.archetypes.has(attribute.archetype.dive))
          return 'Dive';
        else
          return 'Mobility';
      }

      return x;
    });

    if (composition[2]) return 'Hybrid'
    if (composition[1]) return `${composition[0]}-${composition[1]} Hybrid`;
    return composition[0];
  }

  measurePool(pool) {
    pool = Array.from(pool);
    let result = 0;
    for (const hero of pool) {
      result += Math.min(this.measureSynergy(hero), 1);
    }
    return result / pool.length;
  }

  normalizedMetrics() {
    const max = Math.max(
      this.sustain,
      this.range,
      this.mobile,
    );

    return {
      sustain: this.sustain/max,
      range: this.range/max,
      mobile: this.mobile/max,
    }
  }

  normalizedCappedMetrics(at = 0.9) {
    const normal = this.normalizedMetrics();
    return {
      sustain: Math.min(normal.sustain/at, 1),
      range: Math.min(normal.range/at, 1),
      mobile: Math.min(normal.mobile/at, 1),
    }
  }

  utility(playstyle) {
    return this.rotate(this, playstyle);
  }

  rotate(playstyle) {
    return {
      range: playstyle.sustain,
      sustain: playstyle.mobile,
      mobile: playstyle.range,
    }
  }

  similarity(pairing, playstyle) {
    return util.rootSum(util.rms, [
      pairing.sustain * playstyle.sustain,
      pairing.range * playstyle.range,
      pairing.mobile * playstyle.mobile,
    ]);
  }

  without(hero) {
    const members = new Set(this.members);
    members.delete(hero);
    return new TeamComposition(this.name + '-without:' + hero.name, members, this.datapool);
  }

  measureSynergy(hero) {
    if (this.members.size < 1) return 1;
    const team = this.without(hero);
    if (team.members.size < 1) return 1;

    return team.measure(hero);
  }

  measureHeroOption(hero) {
    if (this.members.has(hero)) return true;
    else return this.measureSynergy(hero);
  }

  measure(hero) {
    const normalized = this.normalizedMetrics();
    const capped = this.normalizedCappedMetrics();

    const weights = TeamComposition.getWeights(TeamComposition.measure, hero);

    const playstyle = this.similarity(normalized, hero.playstyle.normalizedMetrics()) * weights.playstyle;
    const utility = this.similarity(normalized, this.rotate(hero.utility.normalizedMetrics())) * weights.utility;
    const healing = this.similarity(normalized, hero.healing.normalizedMetrics()) * weights.healing;

    const scores = [playstyle, utility, healing];

    return util.rootSum(util.rms, scores);
  }

  equals(team) {
    if (this.members.length != team.members.length) return false;
    for (const hero of this.members) {
      if (!team.members.has(hero)) return false;
    }
    return true;
  }

  getMembers() {
    return Array.from(this.members);
  }

  static getWeights(from, hero) {
    const result = {
      playstyle: from.playstyle[hero.class] * hero.playstyle.factor(),
      utility: from.utility[hero.class] * hero.utility.factor(),
      healing: from.healing[hero.class] * hero.healing.factor(),
    }

    result.total = [
      result.playstyle,
      result.utility,
      result.healing,
    ].reduce(util.add);

    return result;
  }

  static getFactors(hero) {
    const result = {
      playstyle: hero.playstyle.factor(),
      utility: hero.utility.factor(),
      healing: hero.healing.factor(),
    }

    result.total = [
      result.playstyle,
      result.utility,
      result.healing,
    ].reduce(util.add);
  }

  static weights = {
    playstyle: {
      [attribute.class.tank.main]: 10,
      [attribute.class.tank.off]: 8,

      [attribute.class.damage.hitscan]: 8,
      [attribute.class.damage.flex]: 8,

      [attribute.class.support.utility]: 1,
      [attribute.class.support.healing]: 1,
    },

    healing: {
      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 0,
      [attribute.class.damage.flex]: 0,

      [attribute.class.support.utility]: 1,
      [attribute.class.support.healing]: 4,
    },

    utility: {
      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 1,
      [attribute.class.damage.flex]: 1,

      [attribute.class.support.utility]: 6,
      [attribute.class.support.healing]: 1,
    },
  }

  static measure = {
    playstyle: {
      [attribute.class.tank.main]: 1,
      [attribute.class.tank.off]: 1,

      [attribute.class.damage.hitscan]: 1,
      [attribute.class.damage.flex]: 1,

      [attribute.class.support.utility]: 1,
      [attribute.class.support.healing]: 1,
    },

    healing: {
      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 0,
      [attribute.class.damage.flex]: 0,

      [attribute.class.support.utility]: 0,
      [attribute.class.support.healing]: 1,
    },

    utility: {
      [attribute.class.tank.main]: 0,
      [attribute.class.tank.off]: 0,

      [attribute.class.damage.hitscan]: 0,
      [attribute.class.damage.flex]: 0,

      [attribute.class.support.utility]: 1,
      [attribute.class.support.healing]: 0,
    },
  }
}
