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

    range_mobile: new Playstyle('Range-Mobile 1:1', 0, 1, 1),
    range_sustain: new Playstyle('Range-Brawl 1:1', 1, 1, 0),
    sustain_mobile: new Playstyle('Sustain-Mobile 1:1', 1, 0, 1),

    range_mobile_2x1: new Playstyle('Poke-Dive 2:1', 0, 2, 1),
    range_sustain_2x1: new Playstyle('Poke-Brawl 2:1', 1, 2, 0),
    sustain_mobile_2x1: new Playstyle('Brawl-Dive 2:1', 2, 0, 1),
    sustain_range_2x1: new Playstyle('Brawl-Poke 2:1', 2, 1, 0),
    mobile_sustain_2x1: new Playstyle('Dive-Brawl 2:1', 1, 0, 2),
    mobile_range_2x1: new Playstyle('Dive-Poke 2:1', 0, 1, 2),

    range_mobile_3x1: new Playstyle('Poke-Dive 3:1', 0, 3, 1),
    range_sustain_3x1: new Playstyle('Poke-Brawl 3:1', 1, 3, 0),
    sustain_mobile_3x1: new Playstyle('Brawl-Dive 3:1', 3, 0, 1),
    sustain_range_3x1: new Playstyle('Brawl-Poke 3:1', 3, 1, 0),
    mobile_sustain_3x1: new Playstyle('Dive-Brawl 3:1', 1, 0, 3),
    mobile_range_3x1: new Playstyle('Dive-Poke 3:1', 0, 1, 3),

    range_mobile_4x1: new Playstyle('Poke-Dive 4:1', 0, 4, 1),
    range_sustain_4x1: new Playstyle('Poke-Brawl 4:1', 1, 4, 0),
    sustain_mobile_4x1: new Playstyle('Brawl-Dive 4:1', 4, 0, 1),
    sustain_range_4x1: new Playstyle('Brawl-Poke 4:1', 4, 1, 0),
    mobile_sustain_4x1: new Playstyle('Dive-Brawl 4:1', 1, 0, 4),
    mobile_range_4x1: new Playstyle('Dive-Poke 4:1', 0, 1, 4),

    null: new Playstyle('Null', 0, 0, 0),
  },

  archetype: {
    tank: {
      mitigation: new HeroArchetype('Damage mitigation'),
    },

    damage: {
      sniper: new HeroArchetype('Sniper DPS', 'Sniper'),
      ranged: new HeroArchetype('Ranged DPS'),
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
    pick: new HeroArchetype('Pick'),
    highdps: new HeroArchetype('High DPS'),

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
