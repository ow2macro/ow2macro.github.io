const heros = [
  {
    name: new Descriptor('Ana'),
    role: attribute.role.support,
    class: attribute.class.healer.main,
    playstyle: attribute.playstyle.pokedive_2x1,
    archetypes: [
      attribute.archetype.support.flex,
      attribute.archetype.support.range,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Ashe'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.sniper,
      attribute.archetype.dive_target,
    ],
  },

  {
    name: new Descriptor('Baptiste', 'Bap'),
    role: attribute.role.support,
    class: attribute.class.healer.main,
    playstyle: attribute.playstyle.brawlpoke_2x1,
    archetypes: [
      attribute.archetype.support.flex,
      attribute.archetype.support.main,
      attribute.archetype.support.area,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Bastion'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.flanker,
      attribute.archetype.dive_target,
    ],
  },

  {
    name: new Descriptor('Brigitte', 'Brig'),
    role: attribute.role.support,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.brawlpoke_3x1,
    archetypes: [
      attribute.archetype.support.main,
      attribute.archetype.support.area,
      attribute.archetype.antidive,
      attribute.archetype.defensiveUlt,
    ],
  },

  {
    name: new Descriptor('Cassidy', 'Cass'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.brawlpoke_2x1,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.brawl,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('D.Va', 'Dva'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Doomfist', 'Doom'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.divebrawl_2x1,
    archetypes: [
      attribute.archetype.tank.brawl,
    ],
  },

  {
    name: new Descriptor('Echo'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.divepoke_3x1,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  {
    name: new Descriptor('Genji'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.divepoke_3x1,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  {
    name: new Descriptor('Hanzo'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.pokedive_3x1,
    archetypes: [
      attribute.archetype.damage.sniper,
      attribute.archetype.damage.buster,
    ],
  },

  {
    name: new Descriptor('Junkrat'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Lucio'),
    role: attribute.role.support,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.rush,
    archetypes: [
      attribute.archetype.support.main,
      attribute.archetype.support.area,
      attribute.archetype.defensiveUlt,
    ],
  },

  {
    name: new Descriptor('Mei'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.damage.brawl,
      attribute.archetype.defensiveUlt,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Mercy'),
    role: attribute.role.damage,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.pokedive_2x1,
    archetypes: [
      attribute.archetype.support.main,
    ],
  },

  {
    name: new Descriptor('Moria'),
    role: attribute.role.support,
    class: attribute.class.healer.main,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.support.flex,
      attribute.archetype.support.area,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Orisa'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.pokebrawl,
    archetypes: [
      attribute.archetype.tank.poke,
      attribute.archetype.tank.mitigation,
    ],
  },

  {
    name: new Descriptor('Pharah'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.divepoke_2x1,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  {
    name: new Descriptor('Reaper'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.brawldive,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.hitscan,
      attribute.archetype.damage.flanker,
    ],
  },

  {
    name: new Descriptor('Reinhardt', 'Rein'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.tank.brawl,
      attribute.archetype.antidive,
      attribute.archetype.tank.mitigation,
    ],
  },

  {
    name: new Descriptor('Roadhog', 'Hog'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.brawlpoke_2x1,
    archetypes: [
      attribute.archetype.tank.brawl,
      attribute.archetype.tank.poke,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Sigma', 'Sig'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.tank.poke,
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
      attribute.archetype.dive_target,
    ],
  },

  {
    name: new Descriptor('Soldier 76', 'Soldier'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.pokedive_2x1,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.flanker,
      attribute.archetype.dive_target,
    ],
  },

  {
    name: new Descriptor('Sombra'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
      attribute.archetype.defensiveUlt,
    ],
  },

  {
    name: new Descriptor('Symmetra'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Torbjorn'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.pokebrawl,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.antidive,
    ],
  },

  {
    name: new Descriptor('Tracer'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.divebrawl_3x1,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  {
    name: new Descriptor('Widowmaker', 'Widow'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.sniper,
      attribute.archetype.dive_target,
    ],
  },

  {
    name: new Descriptor('Winston'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.divebrawl_2x1,
    archetypes: [
      attribute.archetype.tank.dive,
    ],
  },

  {
    name: new Descriptor('Wrecking Ball', 'Ball'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.divepoke_3x1,
    archetypes: [
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
    ],
  },

  {
    name: new Descriptor('Zarya'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.tank.brawl,
      attribute.archetype.tank.mitigation,
    ],
  },

  {
    name: new Descriptor('Zenyatta', 'Zen'),
    role: attribute.role.support,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.pokedive_2x1,
    archetypes: [
      attribute.archetype.support.main,
      attribute.archetype.support.range,
      attribute.archetype.defensiveUlt,
      attribute.archetype.dive_target,
    ],
  },
]

function herosByRole(pool = heros) {
  const result = {
    Tank: [],
    Damage: [],
    Support: [],
  }

  for (const hero of pool) {
    if (hero.role === attribute.role.tank) result.Tank.push(hero);
    if (hero.role === attribute.role.damage) result.Damage.push(hero);
    if (hero.role === attribute.role.support) result.Support.push(hero);
  }

  return result;
}

function heroDictionary() {
  const result = {}

  for (const hero of heros) {
    result[hero.name.full] = hero;
  }

  return result;
}

const _herodictionary = heroDictionary();

function getHero(full) {
  return _herodictionary[full];
};

const hero = {
  ana: _herodictionary['Ana'],
  ashe: _herodictionary['Ashe'],
  baptiste: _herodictionary['Baptiste'],
  bap: _herodictionary['Baptiste'],
  bastion: _herodictionary['Bastion'],
  brigitte: _herodictionary['Brigitte'],
  brig: _herodictionary['Brigitte'],
  cassidy: _herodictionary['Cassidy'],
  dva: _herodictionary['D.Va'],
  doomfist: _herodictionary['Doomfist'],
  echo: _herodictionary['Echo'],
  genji: _herodictionary['Genji'],
  hanzo: _herodictionary['Hanzo'],
  junkrat: _herodictionary['Junkrat'],
  lucio: _herodictionary['Lucio'],
  mei: _herodictionary['Mei'],
  mercy: _herodictionary['Mercy'],
  moria: _herodictionary['Moria'],
  orisa: _herodictionary['Orisa'],
  pharah: _herodictionary['Pharah'],
  reaper: _herodictionary['Reaper'],
  reinhardt: _herodictionary['Reinhardt'],
  roadhog: _herodictionary['Roadhog'],
  hog: _herodictionary['Roadhog'],
  sigma: _herodictionary['Sigma'],
  soldier76: _herodictionary['Soldier76'],
  soldier: _herodictionary['Soldier76'],
  sombra: _herodictionary['Sombra'],
  symmetra: _herodictionary['Symmetra'],
  torbjorn: _herodictionary['Torbjorn'],
  tracer: _herodictionary['Tracer'],
  widowmaker: _herodictionary['Widowmaker'],
  winston: _herodictionary['Winston'],
  wreckingball: _herodictionary['Wrecking Ball'],
  ball: _herodictionary['Wrecking Ball'],
  zarya: _herodictionary['Zarya'],
  zenyatta: _herodictionary['Zenyatta'],
  zen: _herodictionary['Zenyatta'],
}
