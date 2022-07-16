class HeroInteraction extends Descriptor {
  heros = [];
  weight = HeroInteraction.weights.none;
  type = attribute.interaction.null;

  constructor(options = {}) {
    for (const hero of options.heros) if (!hero) console.warn(options)
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
