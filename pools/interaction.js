class HeroInteraction extends Descriptor {
  heros = [];
  weight = Interaction.weights.none;
  type = attribute.interaction.null;

  constructor(options = {}) {
    super(options.heros.map(hero=>hero.name).join('-'));
    Object.assign(this, options);
  }

  static weights = {
    none: 0,
    weak: 1,
    normal: 2,
    strong: 3,
  }
}
