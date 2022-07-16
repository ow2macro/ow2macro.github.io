class HeroInteractionsTable extends Map {
  constructor(interactions) {
    super();

    if (_.isArray(interactions))
      for (const interaction of interactions)
        this.add(interaction);
  }

  add(interaction) {
    for (const hero of interaction.heros)
      this.set(hero, interaction);
  }
}
