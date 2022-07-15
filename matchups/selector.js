class TeamCompositionSelector {
  order = [];
  includes = [];
  excludes = [];
  archetypes = [];
  archetypesExclude = [];

  constructor(options = {}) {
    Object.assign(this, options);
    util.arrayifyObjectProperties(this, 'order', 'includes', 'excludes', 'archetypes', 'archetypesExclude');
  }

  test(team) {
    for (const x of this.excludes) if (team.composition.includes(x)) return false;
    for (const x of this.includes) if (!(team.composition.includes(x))) return false;
    for (const [i, x] of this.order.entries()) if (!(team.composition[i] === x || x === '_')) return false;
    for (const x of this.archetypes) if (!(team.archetypes.has(x))) return false;
    for (const x of this.archetypesExclude) if (team.archetypes.has(x)) return false;
    return true;
  }

  static sustain = new TeamCompositionSelector({includes: ['sustain']});
  static range = new TeamCompositionSelector({includes: ['range']});
  static mobile = new TeamCompositionSelector({includes: ['mobile']});

  static primarySustain = new TeamCompositionSelector({order: ['sustain']});
  static primaryRange = new TeamCompositionSelector({order: ['range']});
  static primaryMobile = new TeamCompositionSelector({order: ['mobile']});

  static hybridSustain = new TeamCompositionSelector({order: ['_', 'sustain']});
  static hybridRange = new TeamCompositionSelector({order: ['_','range']});
  static hybridMobile = new TeamCompositionSelector({order: ['_','mobile']});

  static brawl = new TeamCompositionSelector({includes: ['sustain'], archetypesExclude: [attribute.archetype.rush]});
  static rush = new TeamCompositionSelector({includes: ['sustain'], archetypes: [attribute.archetype.rush]});

  static pick = new TeamCompositionSelector({includes: ['range'], archetypes: [attribute.archetype.spam]});
  static poke = new TeamCompositionSelector({includes: ['range'], archetypesExclude: [attribute.archetype.spam, attribute.archetype.pick]});
  static spam = new TeamCompositionSelector({includes: ['range'], archetypes: [attribute.archetype.pick]});

  static flank = new TeamCompositionSelector({includes: ['mobile'], archetypesExclude: [attribute.archetype.dive]});
  static dive = new TeamCompositionSelector({includes: ['mobile'], archetypes: [attribute.archetype.dive]});
}
