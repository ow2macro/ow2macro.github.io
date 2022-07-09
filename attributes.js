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
    healer: {
      main: new Role('Main Healer'),
      off: new Role('Off Healer'),
    },
  },

  playstyle: {
    sustain: new Playstyle('Brawl', 1, 0, 0),
    range: new Playstyle('Range', 0, 1, 0),
    mobile: new Playstyle('Mobile', 0, 0, 1),

    pokedive: new Playstyle('Poke-Dive', 0, 1, 1),
    pokebrawl: new Playstyle('Poke-Brawl', 1, 1, 0),
    brawldive: new Playstyle('Brawl-Dive', 1, 0, 1),

    rush: new Playstyle('Rush', 1, 0, 1, 'brawl_to_rush'),
    spam: new Playstyle('Range', 0, 1, 0, 'poke_to_spam'),
  },

  archetype: {
    tank: {
      brawl: new HeroArchetype('Brawl Tank'),
      poke: new HeroArchetype('Poke Tank'),
      dive: new HeroArchetype('Dive Tank'),
      mitigation: new HeroArchetype('Damage mitigation'),
    },

    damage: {
      sniper: new HeroArchetype('Sniper DPS', 'Sniper'),
      range: new HeroArchetype('Ranged DPS', 'Ranged'),
      flanker: new HeroArchetype('Flanker DPS', 'Flanker'),
      buster: new HeroArchetype('Shield/Tank Buster DPS', 'Shield/Tank Buster'),
      brawl: new HeroArchetype('Brawl DPS'),
    },

    support: {
      range: new HeroArchetype('Ranged Support'),
      area: new HeroArchetype('Area Of Effect Support', 'AOE Support'),

      main: new HeroArchetype('Main Support'),
      flex: new HeroArchetype('Flex Support'),
    },

    antidive: new HeroArchetype('Anti Dive'),
    defensiveUlt: new HeroArchetype('Defensive Ult'),
  },
}
