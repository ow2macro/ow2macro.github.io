const heros = {
  ana: {
    name: new Descriptor('Ana'),
    role: attribute.role.support,
    class: attribute.class.healer.main,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.support.flex,
      attribute.archetype.support.range,
      attribute.archetype.antidive,
    ],
  },

  ashe: {
    name: new Descriptor('Ashe'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.sniper,
    ],
  },

  baptiste: {
    name: new Descriptor('Baptiste', 'Bap'),
    role: attribute.role.support,
    class: attribute.class.healer.main,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.support.flex,
      attribute.archetype.support.main,
      attribute.archetype.support.area,
      attribute.archetype.antidive,
    ],
  },

  bastion: {
    name: new Descriptor('Bastion'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.flanker,
    ],
  },

  brigitte: {
    name: new Descriptor('Brigitte', 'Brig'),
    role: attribute.role.support,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.support.main,
      attribute.archetype.support.area,
      attribute.archetype.antidive,
      attribute.archetype.defensiveUlt,
    ],
  },

  cassidy: {
    name: new Descriptor('Cassidy', 'Cass'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.pokebrawl,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.brawl,
      attribute.archetype.antidive,
    ],
  },

  dva: {
    name: new Descriptor('D.Va', 'Dva'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
    ],
  },

  doomfist: {
    name: new Descriptor('Doomfist', 'Doom'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.tank.brawl,
    ],
  },

  echo: {
    name: new Descriptor('Echo'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  genji: {
    name: new Descriptor('Genji'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  hanzo: {
    name: new Descriptor('Hanzo'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.sniper,
      attribute.archetype.damage.buster,
    ],
  },

  junkrat: {
    name: new Descriptor('Junkrat'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.antidive,
    ],
  },

  lucio: {
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

  mei: {
    name: new Descriptor('Mei'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.damage.brawl,
      attribute.archetype.defensiveUlt,
    ],
  },

  mercy: {
    name: new Descriptor('Mercy'),
    role: attribute.role.damage,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.support.main,
    ],
  },

  moria: {
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

  orisa: {
    name: new Descriptor('Orisa'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.tank.poke,
      attribute.archetype.tank.mitigation,
    ],
  },

  pharah: {
    name: new Descriptor('Pharah'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  reaper: {
    name: new Descriptor('Reaper'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.hitscan,
      attribute.archetype.damage.flanker,
    ],
  },

  reinhardt: {
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

  roadhog: {
    name: new Descriptor('Roadhog', 'Hog'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.pokebrawl,
    archetypes: [
      attribute.archetype.tank.brawl,
      attribute.archetype.tank.poke,
      attribute.archetype.antidive,
    ],
  },

  sigma: {
    name: new Descriptor('Sigma', 'Sig'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.tank.poke,
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
    ],
  },

  soldier76: {
    name: new Descriptor('Soldier 76', 'Soldier'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.flanker,
    ],
  },

  sombra: {
    name: new Descriptor('Sombra'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
      attribute.archetype.defensiveUlt,
    ],
  },

  symmetra: {
    name: new Descriptor('Symmetra'),
    role: attribute.role.damage,
    class: attribute.class.damage.flex,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.antidive,
    ],
  },

  torbjorn: {
    name: new Descriptor('Symmetra'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.damage.buster,
      attribute.archetype.damage.hitscan,
      attribute.archetype.antidive,
    ],
  },

  tracer: {
    name: new Descriptor('Tracer'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.damage.flanker,
    ],
  },

  widowmaker: {
    name: new Descriptor('Widowmaker', 'Widow'),
    role: attribute.role.damage,
    class: attribute.class.damage.hitscan,
    playstyle: attribute.playstyle.range,
    archetypes: [
      attribute.archetype.damage.sniper,
    ],
  },

  winston: {
    name: new Descriptor('Winston'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.mobile,
    archetypes: [
      attribute.archetype.tank.dive,
    ],
  },

  wreckingball: {
    name: new Descriptor('Wrecking Ball', 'Ball'),
    role: attribute.role.tank,
    class: attribute.class.tank.main,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.tank.dive,
      attribute.archetype.tank.mitigation,
    ],
  },

  zarya: {
    name: new Descriptor('Zarya'),
    role: attribute.role.tank,
    class: attribute.class.tank.off,
    playstyle: attribute.playstyle.sustain,
    archetypes: [
      attribute.archetype.tank.brawl,
      attribute.archetype.tank.mitigation,
    ],
  },

  zenyatta: {
    name: new Descriptor('Zenyatta', 'Zen'),
    role: attribute.role.support,
    class: attribute.class.healer.off,
    playstyle: attribute.playstyle.pokedive,
    archetypes: [
      attribute.archetype.support.main,
      attribute.archetype.support.range,
      attribute.archetype.defensiveUlt,
    ],
  },
}
