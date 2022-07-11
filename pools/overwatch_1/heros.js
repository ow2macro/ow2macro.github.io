function load() {
  return [
    {
      name: new Descriptor('Ana'),
      id: 'ana',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.mobile,
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.range,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Ashe'),
      id: 'ashe',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.dive_target,
      ],
    },

    {
      name: new Descriptor('Baptiste', 'Bap'),
      id: 'baptiste',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.pokebrawl,
      healing: attribute.playstyle.sustain,
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Bastion'),
      id: 'bastion',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.spam,
        attribute.archetype.damage.buster,
        attribute.archetype.damage.flanker,
        attribute.archetype.dive_target,
      ],
    },

    {
      name: new Descriptor('Brigitte', 'Brig'),
      id: 'brigitte',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.sustain,
      archetypes: [
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
        attribute.archetype.defensiveUlt,
      ],
    },

    {
      name: new Descriptor('Cassidy'),
      id: 'cassidy',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.brawlpoke_2x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.damage.brawl,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('D.Va'),
      id: 'dva',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.dive,
        attribute.archetype.tank.mitigation,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Doomfist', 'Doom'),
      id: 'doomfist',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.divebrawl_3x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.brawl,
      ],
    },

    {
      name: new Descriptor('Echo'),
      id: 'echo',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.divepoke_2x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.flanker,
      ],
    },

    {
      name: new Descriptor('Genji'),
      id: 'genji',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.flanker,
      ],
    },

    {
      name: new Descriptor('Hanzo'),
      id: 'hanzo',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.damage.buster,
      ],
    },

    {
      name: new Descriptor('Junkrat'),
      id: 'junkrat',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.pokebrawl_2x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.spam,
        attribute.archetype.damage.buster,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Lucio'),
      id: 'lucio',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.divebrawl_2x1,
      healing: attribute.playstyle.sustain,
      archetypes: [
        attribute.archetype.rush,
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.defensiveUlt,
      ],
    },

    {
      name: new Descriptor('Mei'),
      id: 'mei',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.brawl,
        attribute.archetype.defensiveUlt,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Mercy'),
      id: 'mercy',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.mobile,
      archetypes: [
        attribute.archetype.support.main,
      ],
    },

    {
      name: new Descriptor('Moria'),
      id: 'moria',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.sustain,
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Orisa'),
      id: 'orisa',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.poke,
        attribute.archetype.tank.mitigation,
      ],
    },

    {
      name: new Descriptor('Pharah'),
      id: 'pharah',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.pokedive,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.flanker,
      ],
    },

    {
      name: new Descriptor('Reaper'),
      id: 'reaper',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.brawldive,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.damage.hitscan,
        attribute.archetype.damage.flanker,
      ],
    },

    {
      name: new Descriptor('Reinhardt', 'Rein'),
      id: 'reinhardt',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.brawl,
        attribute.archetype.antidive,
        attribute.archetype.tank.mitigation,
      ],
    },

    {
      name: new Descriptor('Roadhog', 'Hog'),
      id: 'roadhog',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.brawlpoke_2x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.brawl,
        attribute.archetype.tank.poke,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Sigma', 'Sig'),
      id: 'sigma',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.pokedive_2x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.poke,
        attribute.archetype.tank.dive,
        attribute.archetype.tank.mitigation,
        attribute.archetype.dive_target,
      ],
    },

    {
      name: new Descriptor('Soldier 76', 'Soldier'),
      id: 'soldier',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.pokedive_3x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.damage.flanker,
        attribute.archetype.dive_target,
      ],
    },

    {
      name: new Descriptor('Sombra'),
      id: 'sombra',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.flanker,
        attribute.archetype.defensiveUlt,
      ],
    },

    {
      name: new Descriptor('Symmetra'),
      id: 'symmetra',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Torbjorn'),
      id: 'torbjorn',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.pokebrawl,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.antidive,
      ],
    },

    {
      name: new Descriptor('Tracer'),
      id: 'tracer',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.flanker,
      ],
    },

    {
      name: new Descriptor('Widowmaker', 'Widow'),
      id: 'widowmaker',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.dive_target,
      ],
    },

    {
      name: new Descriptor('Winston'),
      id: 'winston',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.divebrawl_4x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.dive,
      ],
    },

    {
      name: new Descriptor('Wrecking Ball', 'Ball'),
      id: 'wreckingball',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.divepoke_3x1,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.dive,
        attribute.archetype.tank.mitigation,
      ],
    },

    {
      name: new Descriptor('Zarya'),
      id: 'zarya',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      archetypes: [
        attribute.archetype.tank.brawl,
        attribute.archetype.tank.mitigation,
      ],
    },

    {
      name: new Descriptor('Zenyatta', 'Zen'),
      id: 'zenyatta',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.mobile,
      archetypes: [
        attribute.archetype.support.main,
        attribute.archetype.support.range,
        attribute.archetype.defensiveUlt,
        attribute.archetype.dive_target,
      ],
    },
  ];
}

pools['overwatch_1'].heros = load;
