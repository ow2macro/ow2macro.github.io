const attribute = {
  role: {
    tank: new Role('Tank'),
    damage: new Role('Damage', 'DPS'),
    support: new Role('Support'),
  },

  class: {
    tank: {
      main: new Role('Main Tank'),
      off: new Role('Off Tank'),
    },
    damage: {
      hitscan: new Role('Hitscan DPS', 'Hitscan'),
      flex: new Role('Flex DPS', 'Projectile'),
    },
    support: {
      utility: new Role('Utility Support'),
      healing: new Role('Healing Support'),
    },
  },

  playstyle: {
    sustain: new Playstyle('Brawl', 1, 0, 0),
    range: new Playstyle('Range', 0, 1, 0),
    mobile: new Playstyle('Mobile', 0, 0, 1),

    pokedive: new Playstyle('Poke-Dive', 0, 1, 1),
    pokebrawl: new Playstyle('Poke-Brawl', 1, 1, 0),
    brawldive: new Playstyle('Brawl-Dive', 1, 0, 1),

    pokedive_2x1: new Playstyle('Poke-Dive 2:1', 0, 2, 1),
    pokebrawl_2x1: new Playstyle('Poke-Brawl 2:1', 1, 2, 0),
    brawldive_2x1: new Playstyle('Brawl-Dive 2:1', 2, 0, 1),
    brawlpoke_2x1: new Playstyle('Brawl-Poke 2:1', 2, 1, 0),
    divebrawl_2x1: new Playstyle('Dive-Brawl 2:1', 1, 0, 2),
    divepoke_2x1: new Playstyle('Dive-Poke 2:1', 0, 1, 2),

    pokedive_3x1: new Playstyle('Poke-Dive 3:1', 0, 3, 1),
    pokebrawl_3x1: new Playstyle('Poke-Brawl 3:1', 1, 3, 0),
    brawldive_3x1: new Playstyle('Brawl-Dive 3:1', 3, 0, 1),
    brawlpoke_3x1: new Playstyle('Brawl-Poke 3:1', 3, 1, 0),
    divebrawl_3x1: new Playstyle('Dive-Brawl 3:1', 1, 0, 3),
    divepoke_3x1: new Playstyle('Dive-Poke 3:1', 0, 1, 3),

    pokedive_4x1: new Playstyle('Poke-Dive 4:1', 0, 4, 1),
    pokebrawl_4x1: new Playstyle('Poke-Brawl 4:1', 1, 4, 0),
    brawldive_4x1: new Playstyle('Brawl-Dive 4:1', 4, 0, 1),
    brawlpoke_4x1: new Playstyle('Brawl-Poke 4:1', 4, 1, 0),
    divebrawl_4x1: new Playstyle('Dive-Brawl 4:1', 1, 0, 4),
    divepoke_4x1: new Playstyle('Dive-Poke 4:1', 0, 1, 4),

    null: new Playstyle('Null', 0, 0, 0),
  },

  archetype: {
    tank: {
      mitigation: new HeroArchetype('Damage mitigation'),
    },

    damage: {
      sniper: new HeroArchetype('Sniper DPS', 'Sniper'),
      flanker: new HeroArchetype('Flanker DPS', 'Flanker'),
      buster: new HeroArchetype('Shield/Tank Buster DPS', 'Shield/Tank Buster'),
      brawl: new HeroArchetype('Brawl DPS'),
    },

    support: {
      range: new HeroArchetype('Ranged Support'),
      area: new HeroArchetype('Area of Effect Support', 'AOE Support'),

      main: new HeroArchetype('Main Support'),
      flex: new HeroArchetype('Flex Support'),
    },

    spam: new HeroArchetype('Spam'),
    pick: new HeroArchetype('Pick'),
    rush: new HeroArchetype('Rush'),
    dive: new HeroArchetype('Dive'),

    antidive: new HeroArchetype('Antidive'),
    dive_target: new HeroArchetype('Dive Target'),
    defensiveUlt: new HeroArchetype('Defensive Ult'),
  },

  interaction: {
    counter: new InteractionArchetype('Counter'),
    synergy: new InteractionArchetype('Synergy'),
    combo: new InteractionArchetype('Combo'),
    null: new InteractionArchetype('Null'),
  }
}
