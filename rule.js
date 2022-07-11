class TeamCompositionComponent extends Descriptor {
  constructor(name) {
    super(name);
  }

  static brawl = new TeamCompositionComponent('Brawl');
  static poke = new TeamCompositionComponent('Poke');
  static dive = new TeamCompositionComponent('Dive');
}

const tests = {
  has: (component) => (composition) => composition.includes(component),
  order: (n, component) => (composition) => composition[n] === component,
}

const rules = {
  hybrid: () => (composition) => composition.length > 2,

  brawl: tests.order(0, TeamCompositionComponent.brawl.full),
  sustain: tests.has(TeamCompositionComponent.brawl.full),

  poke: tests.order(0, TeamCompositionComponent.poke.full),
  range: tests.has(TeamCompositionComponent.poke.full),

  dive: tests.order(0, TeamCompositionComponent.dive.full),
  mobile: tests.has(TeamCompositionComponent.dive.full),
}

rules.pokedive = (composition) => rules.range(composition) && rules.range(composition);
rules.pure = {
  brawl: (composition) => !rules.hybrid(composition) && rules.brawl(composition),
  poke: (composition) => !rules.hybrid(composition) && rules.poke(composition),
  dive: (composition) => !rules.hybrid(composition) && rules.dive(composition),
}

class Rule extends Descriptor {
  group;
  filter;
  details;

  constructor(name, group, filter, details) {
    super(name);
    this.group = group;
    this.filter = filter;
    this.details = details;
  }
}

const matchups = [];
