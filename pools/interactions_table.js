class HeroInteractionsTable extends Map {
  constructor(interactions) {
    super();

    if (_.isArray(interactions))
      for (const interaction of interactions)
        this.add(interaction);
  }

  add(interaction) {
    for (const hero of interaction.heros) {
      const item = this.get(hero);
      item.push(interaction);
      this.set(hero, item);
    }
  }

  get(hero) {
    return super.get(hero) || [];
  }
}
