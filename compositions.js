const teamCompositions = {
  goats: new TeamComposition('GOATS (3-0-3)', [
    hero.reinhardt,
    hero.zarya,
    hero.dva,
    hero.moria,
    hero.lucio,
    hero.brigitte,
  ]),

  rush: new TeamComposition('Rush (2-2-2)', [
    hero.reinhardt,
    hero.zarya,
    hero.cassidy,
    hero.mei,
    hero.baptiste,
    hero.lucio,
  ]),

  sustainBrawl: new TeamComposition('Sustain Brawl (2-2-2)', [
    hero.reinhardt,
    hero.zarya,
    hero.symmetra,
    hero.mei,
    hero.baptiste,
    hero.moria,
  ]),

  doubleShield: new TeamComposition('Double Shield (2-2-2)', [
    hero.orisa,
    hero.sigma,
    hero.ashe,
    hero.echo,
    hero.baptiste,
    hero.brigitte,
  ]),

  dive: new TeamComposition('Dive (2-2-2)', [
    hero.winston,
    hero.dva,
    hero.tracer,
    hero.genji,
    hero.lucio,
    hero.zenyatta,
  ]),

  doubleBubble: new TeamComposition('Double Bubble (2-2-2)', [
    hero.winston,
    hero.zarya,
    hero.sombra,
    hero.genji,
    hero.ana,
    hero.brigitte,
  ]),

  pokeDive: new TeamComposition('Poke Dive (2-2-2)', [
    hero.wreckingball,
    hero.sigma,
    hero.tracer,
    hero.echo,
    hero.zenyatta,
    hero.brigitte,
  ]),

  pirateShip: new TeamComposition('Pirate Ship', [
    hero.orisa,
    hero.bastion,
    hero.hanzo,
    hero.baptiste,
    hero.zenyatta,
  ]),
};
