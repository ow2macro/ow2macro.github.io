function load() {
  return [
    new Hero({
      name: 'Ana',
      id: 'ana',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.mobile_sustain_2x1,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(1,5,3),
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.range,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Ashe',
      id: 'ashe',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,3,3),
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.dive_target,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'Baptiste',
      short: 'Bap',
      id: 'baptiste',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.range_sustain,
      healing: attribute.playstyle.sustain,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(1,3,5, 1),
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Bastion',
      id: 'bastion',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,5,5, 1),
      archetypes: [
        attribute.archetype.spam,
        attribute.archetype.damage.buster,
        attribute.archetype.highdps,
        attribute.archetype.damage.flanker,
        attribute.archetype.dive_target,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'Brigitte',
      short: 'Brig',
      id: 'brigitte',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.sustain,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,2,5),
      archetypes: [
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
        attribute.archetype.defensiveUlt,
      ],
    }),

    new Hero({
      name: 'Cassidy',
      id: 'cassidy',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.sustain_range_3x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(2,2,5, 1),
      archetypes: [
        attribute.archetype.highdps,
        attribute.archetype.damage.brawl,
        attribute.archetype.antidive,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'D.Va',
      id: 'dva',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,5,2),
      archetypes: [
        attribute.archetype.tank.mitigation,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Doomfist',
      short: 'Doom',
      id: 'doomfist',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.mobile_sustain_3x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(0,5,2, 0.8),
      archetypes: [
        attribute.archetype.dive,
      ],
    }),

    new Hero({
      name: 'Echo',
      id: 'echo',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.range_mobile,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(3,5,3),
      archetypes: [
        attribute.archetype.dive,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Genji',
      id: 'genji',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(1,5,0),
      archetypes: [
        attribute.archetype.dive,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Hanzo',
      id: 'hanzo',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,4,3),
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.damage.buster,
        attribute.archetype.highdps,
      ],
    }),

    new Hero({
      name: 'Junkrat',
      id: 'junkrat',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.range_sustain_3x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,2,5),
      archetypes: [
        attribute.archetype.spam,
        attribute.archetype.damage.buster,
        attribute.archetype.highdps,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Lucio',
      id: 'lucio',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.mobile,
      healing: attribute.playstyle.sustain,
      utility: attribute.playstyle.mobile,
      phases: new FightPhases(0,5,1),
      archetypes: [
        attribute.archetype.rush,
        attribute.archetype.support.main,
        attribute.archetype.support.area,
        attribute.archetype.defensiveUlt,
      ],
    }),

    new Hero({
      name: 'Mei',
      id: 'mei',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,1,5),
      archetypes: [
        attribute.archetype.damage.brawl,
        attribute.archetype.defensiveUlt,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Mercy',
      id: 'mercy',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.null,
      healing: attribute.playstyle.mobile,
      utility: attribute.playstyle.range,
      phases: new FightPhases(5,1,1, 1),
      archetypes: [
        attribute.archetype.support.main,
      ],
    }),

    new Hero({
      name: 'Moria',
      id: 'moria',
      role: attribute.role.support,
      class: attribute.class.support.healing,
      playstyle: attribute.playstyle.sustain_mobile_3x1,
      healing: attribute.playstyle.sustain,
      utility: attribute.playstyle.null,
      phases: new FightPhases(0,1,5),
      archetypes: [
        attribute.archetype.support.flex,
        attribute.archetype.support.area,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Orisa',
      id: 'orisa',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.range,
      phases: new FightPhases(5,5,5),
      archetypes: [
        attribute.archetype.tank.mitigation,
      ],
    }),

    new Hero({
      name: 'Pharah',
      id: 'pharah',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.range_mobile,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(3,5,1),
      archetypes: [
        attribute.archetype.dive,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Reaper',
      id: 'reaper',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.sustain_mobile,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(0,5,2),
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.highdps,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Reinhardt',
      short: 'Rein',
      id: 'reinhardt',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,1,5, 1),
      archetypes: [
        attribute.archetype.antidive,
        attribute.archetype.tank.mitigation,
      ],
    }),

    new Hero({
      name: 'Roadhog',
      short: 'Hog',
      id: 'roadhog',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.range_sustain,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(5,5,4, 1),
      archetypes: [
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Sigma',
      short: 'Sig',
      id: 'sigma',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.range_mobile_2x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.range,
      phases: new FightPhases(5,3,5),
      archetypes: [
        attribute.archetype.tank.mitigation,
        attribute.archetype.dive_target,
      ],
    }),

    new Hero({
      name: 'Soldier 76',
      short: 'Soldier',
      id: 'soldier',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range_mobile_2x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,3,0, 1),
      archetypes: [
        attribute.archetype.highdps,
        attribute.archetype.damage.flanker,
        attribute.archetype.dive_target,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'Sombra',
      id: 'sombra',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.mobile_range_2x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,5,0),
      archetypes: [
        attribute.archetype.dive,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Symmetra',
      id: 'symmetra',
      role: attribute.role.damage,
      class: attribute.class.damage.flex,
      playstyle: attribute.playstyle.sustain,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.mobile,
      phases: new FightPhases(0,5,5, 1.25),
      archetypes: [
        attribute.archetype.damage.buster,
        attribute.archetype.highdps,
        attribute.archetype.antidive,
      ],
    }),

    new Hero({
      name: 'Torbjorn',
      short: 'Torb',
      id: 'torbjorn',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range_sustain,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(5,3,4),
      archetypes: [
        attribute.archetype.highdps,
        attribute.archetype.antidive,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'Tracer',
      id: 'tracer',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.mobile_sustain_4x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(0,5,1),
      archetypes: [
        attribute.archetype.dive,
        attribute.archetype.damage.flanker,
      ],
    }),

    new Hero({
      name: 'Widowmaker',
      short: 'Widow',
      id: 'widowmaker',
      role: attribute.role.damage,
      class: attribute.class.damage.hitscan,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(5,0,0),
      archetypes: [
        attribute.archetype.damage.sniper,
        attribute.archetype.dive_target,
        attribute.archetype.damage.ranged,
      ],
    }),

    new Hero({
      name: 'Winston',
      id: 'winston',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.mobile_sustain_4x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(0,5,2),
      archetypes: [
        attribute.archetype.tank.mitigation,
      ],
    }),

    new Hero({
      name: 'Wrecking Ball',
      short: 'Ball',
      id: 'wreckingball',
      role: attribute.role.tank,
      class: attribute.class.tank.main,
      playstyle: attribute.playstyle.mobile_range_4x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.null,
      phases: new FightPhases(1,5,1),
      archetypes: [
        attribute.archetype.tank.mitigation,
      ],
    }),

    new Hero({
      name: 'Zarya',
      id: 'zarya',
      role: attribute.role.tank,
      class: attribute.class.tank.off,
      playstyle: attribute.playstyle.sustain_range_4x1,
      healing: attribute.playstyle.null,
      utility: attribute.playstyle.sustain,
      phases: new FightPhases(0,2,5, 1),
      archetypes: [
        attribute.archetype.tank.mitigation,
      ],
    }),

    new Hero({
      name: 'Zenyatta',
      short: 'Zen',
      id: 'zenyatta',
      role: attribute.role.support,
      class: attribute.class.support.utility,
      playstyle: attribute.playstyle.range,
      healing: attribute.playstyle.mobile,
      utility: attribute.playstyle.range,
      phases: new FightPhases(5,0,0),
      archetypes: [
        attribute.archetype.support.main,
        attribute.archetype.support.range,
        attribute.archetype.defensiveUlt,
        attribute.archetype.dive_target,
        attribute.archetype.highdps,
      ],
    }),
  ];
}

pools['overwatch_1'].heros = load;
