function load(hero) {
  return {
    '5v5 Role Queue': [
      new TeamComposition('Rush', [
        hero.reinhardt,
        hero.cassidy,
        hero.mei,
        hero.moria,
        hero.lucio,
      ]),

      new TeamComposition('Poke Dive', [
        hero.wreckingball,
        hero.tracer,
        hero.echo,
        hero.brigitte,
        hero.zen,
      ]),
    ],
  };
};

pools['overwatch_2'].compositionSets = load;
