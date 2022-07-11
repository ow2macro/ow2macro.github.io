function load(hero) {
  return {
    'Brawl': [
      new TeamComposition('GOATS', [
        hero.reinhardt,
        hero.zarya,
        hero.dva,
        hero.moria,
        hero.lucio,
        hero.brigitte,
      ]),

      new TeamComposition('GOATS+', [
        hero.reinhardt,
        hero.zarya,
        hero.dva,
        hero.zenyatta,
        hero.lucio,
        hero.brigitte,
      ]),

      new TeamComposition('Rein Zarya Rush', [
        hero.reinhardt,
        hero.zarya,
        hero.cassidy,
        hero.mei,
        hero.baptiste,
        hero.lucio,
      ]),

      new TeamComposition('Rein Zarya Sustain', [
        hero.reinhardt,
        hero.zarya,
        hero.mei,
        hero.symmetra,
        hero.baptiste,
        hero.moria,
      ]),
    ],

    'Dive': [
      new TeamComposition('Classic Dive', [
        hero.winston,
        hero.dva,
        hero.tracer,
        hero.genji,
        hero.lucio,
        hero.zenyatta,
      ]),

      new TeamComposition('Disruption Dive', [
        hero.wreckingball,
        hero.dva,
        hero.sombra,
        hero.doomfist,
        hero.lucio,
        hero.ana,
      ]),
    ],

    'Poke': [
      new TeamComposition('Double Shield', [
        hero.orisa,
        hero.sigma,
        hero.widowmaker,
        hero.hanzo,
        hero.brigitte,
        hero.zenyatta,
      ]),

      new TeamComposition('Classic Pirate Ship', [
        hero.orisa,
        hero.roadhog,
        hero.bastion,
        hero.hanzo,
        hero.mercy,
        hero.zenyatta,
      ]),

      new TeamComposition('Double Shield Pirate Ship', [
        hero.orisa,
        hero.sigma,
        hero.bastion,
        hero.hanzo,
        hero.brigitte,
        hero.zenyatta,
      ]),

      new TeamComposition('Pulled Pork', [
        hero.orisa,
        hero.roadhog,
        hero.widowmaker,
        hero.hanzo,
        hero.mercy,
        hero.zenyatta,
      ]),

      new TeamComposition('Sig Hog', [
        hero.roadhog,
        hero.sigma,
        hero.soldier,
        hero.hanzo,
        hero.ana,
        hero.mercy,
      ]),

      new TeamComposition('Cheese', [
        hero.orisa,
        hero.dva,
        hero.bastion,
        hero.pharah,
        hero.baptiste,
        hero.mercy,
      ]),
    ],

    'Hybrid': [
      new TeamComposition('Poke Dive', [
        hero.wreckingball,
        hero.sigma,
        hero.tracer,
        hero.echo,
        hero.zenyatta,
        hero.brigitte,
      ]),

      new TeamComposition('Hog Zarya', [
        hero.roadhog,
        hero.zarya,
        hero.ashe,
        hero.sombra,
        hero.ana,
        hero.mercy,
      ]),

      new TeamComposition('Double Bubble', [
        hero.winston,
        hero.zarya,
        hero.sombra,
        hero.genji,
        hero.ana,
        hero.brigitte,
      ]),

      new TeamComposition('RZ Hackfist', [
        hero.reinhardt,
        hero.zarya,
        hero.sombra,
        hero.doomfist,
        hero.lucio,
        hero.ana,
      ]),

      new TeamComposition('Hog & Ball Torture', [
        hero.wreckingball,
        hero.roadhog,
        hero.widowmaker,
        hero.tracer,
        hero.brigitte,
        hero.zenyatta,
      ]),

      new TeamComposition('Multi-DPS', [
        hero.wreckingball,
        hero.soldier,
        hero.sombra,
        hero.pharah,
        hero.ana,
        hero.mercy,
      ]),
    ],
  };
};

pools['overwatch_1'].compositionSets = load;
