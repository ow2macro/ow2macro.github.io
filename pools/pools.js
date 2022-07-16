const pools = {
  'overwatch_1': {
    id: 1,
    version: {
      major: 3,
      minor: 0,
      patch: 0,
      tag: 'a',
    }
  },

  'overwatch_2': {
    id: 2,
    version: {
      major: 1,
      minor: 0,
      patch: 0,
      tag: 'a',
    }
  },
};

function herosByRole(pool) {
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

function heroDictionary(heros) {
  const result = {}

  for (const hero of heros) {
    result[hero.id] = hero;
  }

  return result;
}


function listPools() {
  return Object.keys(pools);
}

class DataPool {
  heros = [];
  hero = {};
  compositionSets = [];
  roles = [];
  interactions = {
    allied: new HeroInteractionsTable(),
    enemy: new HeroInteractionsTable(),
  };

  constructor(obj) {
    if (obj) {
      this.heros = obj.heros();
      this.hero = heroDictionary(this.heros);
      this.compositionSets = obj.compositionSets(this.hero);
      this.roles = herosByRole(this.heros);
      this.interactions = obj.interactions(this.hero);
    }
  }

  static load(name) {
    return new DataPool(pools[name]);
  }
}
