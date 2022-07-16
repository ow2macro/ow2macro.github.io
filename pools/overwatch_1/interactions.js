function load(hero) {
  const allied = new HeroInteractionsTable([
    new HeroInteraction({
      heros: [hero.reinhardt, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Zarya's Bubble enables Reinhards aggressive playstyle, and provides more proection from CC.`,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's builds charge well from bubbling Reinhardt.`,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya and Reinhard cycle Ultimates well.`,
    }),

    new HeroInteraction({
      heros: [hero.winston, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's Bubble enables Winston's mobility, and provides more proection from CC.`,
    }),

    new HeroInteraction({
      heros: [hero.winston, hero.dva],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Dva's Defense Matrix enables Winston's mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.winston, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's builds charge well from bubbling Winston.`,
    }),

    new HeroInteraction({
      heros: [hero.wreckingball, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's Bubble enables Wrecking Ball's mobility, and provides proection from CC.`,
    }),

    new HeroInteraction({
      heros: [hero.wreckingball, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's builds charge well from bubbling Wrecking Ball.`,
    }),

    new HeroInteraction({
      heros: [hero.roadhog, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Zarya's Bubble enables Roadhog to land hooks, and provides proection from CC.`,
    }),

    new HeroInteraction({
      heros: [hero.roadhog, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's builds charge well from bubbling Roadhog.`,
    }),

    new HeroInteraction({
      heros: [hero.sigma, hero.wreckingball],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Sigma is strong alone on the frontline, while Ball is strong alone in the enemy backline.`,
    }),

    new HeroInteraction({
      heros: [hero.doomfist, hero.zarya],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Zarya's Bubble enables Doomfist's Brawly aggression, and provides proection from CC.`,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.cassidy],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.weak,
      description: `Cassidy's Flashbang can enable Reinhardt's Earthshatter.`,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.mei],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.weak,
      description: `Mei's Ice Wall can provide extra damage mitigation to help Reinhardt get close to enemies.`,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.symmetra],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Symmetra's Teleporter can make up for Reinhardt's lack of mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.zarya, hero.lucio],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
    }),

    new HeroInteraction({
      heros: [hero.reinhardt, hero.lucio],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Lucio's speed boosts makes up for Reinhards low mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.brigitte, hero.zenyatta],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Brigitte's sustain makes up for Zenyatta's low survivability.`,
    }),

    new HeroInteraction({
      heros: [hero.brigitte, hero.ana],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Brigitte's sustain makes up for Ana's moderate survivability.`,
    }),

    new HeroInteraction({
      heros: [hero.zarya, hero.hanzo],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.strong,
      descriptor: `Zarya's Graviton Surge combos with Hanzo's Dragonstrike.`,
    }),

    new HeroInteraction({
      heros: [hero.zarya, hero.tracer],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.normal,
      descriptor: `Zarya's Graviton Surge combos with Tracers's Pulse Bomb.`,
    }),

    new HeroInteraction({
      heros: [hero.zarya, hero.torbjorn],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.weak,
      descriptor: `Zarya's Graviton Surge combos with Torbjorn's Molten Core.`,
    }),

    new HeroInteraction({
      heros: [hero.zarya, hero.junkrat],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.weak,
      descriptor: `Zarya's Graviton Surge combos with Junkrats's Rip Tire.`,
    }),

    new HeroInteraction({
      heros: [hero.ana, hero.genji],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.strong,
      descriptor: `Anas's Nano Boost combos with Genji's Dragonblade.`,
    }),

    new HeroInteraction({
      heros: [hero.ana, hero.soldier],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.strong,
      descriptor: `Anas's Nano Boost combos with Soldiers's Tacticle Visor.`,
    }),

    new HeroInteraction({
      heros: [hero.ana, hero.winston],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      descriptor: `Ana's Nano Boost enables Winston.`,
    }),

    new HeroInteraction({
      heros: [hero.ana, hero.winston],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      descriptor: `Ana and Winston cycle Ultimates well.`,
    }),

    new HeroInteraction({
      heros: [hero.brigitte, hero.zenyatta],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Defensive/Aggressive support Ultimates.`,
    }),

    new HeroInteraction({
      heros: [hero.brigitte, hero.ana],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Defensive/Aggressive support Ultimates.`,
    }),

    new HeroInteraction({
      heros: [hero.pharah, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Mercy's mobile healing enables Pharah's mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.echo, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Mercy's mobile healing enables Echo's mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.soldier, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Mercy's damage boost amplifies Soldier 76's high damage and range.`,
    }),

    new HeroInteraction({
      heros: [hero.soldier, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Mercy's mobile healing enables Soldier 76's mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.bastion, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.normal,
      description: `Mercy's damage boost amplifies Bastion's high damage.`,
    }),

    new HeroInteraction({
      heros: [hero.zenyatta, hero.mercy],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Mercy's damage boost amplifies Zenyatta's high damage.`,
    }),

    new HeroInteraction({
      heros: [hero.sombra, hero.tracer],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.weak,
      description: `Sombra's hack disrupts threats to tracer.`,
    }),

    new HeroInteraction({
      heros: [hero.orisa, hero.roadhog],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.normal,
      description: `Orisa's pull enables roadhog to land hooks.`,
    }),

    new HeroInteraction({
      heros: [hero.bastion, hero.symmetra],
      type: attribute.interaction.combo,
      weight: HeroInteraction.weights.weak,
      description: `Symmetra's Teleporter makes up for Bastion's low mobility.`,
    }),

    new HeroInteraction({
      heros: [hero.bastion, hero.orisa],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Orisa's low mobility and high sustain pair well with Bastion's low mobility and high sustain.`,
    }),

    new HeroInteraction({
      heros: [hero.orisa, hero.sigma],
      type: attribute.interaction.synergy,
      weight: HeroInteraction.weights.strong,
      description: `Orisa and Sigma can alternate shields for very high sustain, or shield multiple angles at once.`,
    }),
  ]);

  return {
    allied,
  }
}
pools['overwatch_1'].interactions = load;
