class Rule extends Descriptor {
  focus = null;

  role = 'any';
  team = true;
  enemy = true;
  plays = [];

  constructor(options = {}) {
    super(options.name ?? options.full ?? `${options.focus}/${options.role}`, options.short);
    delete options.name;
    delete options.full;
    delete options.short;
    Object.assign(this, options);
    util.arrayifyObjectProperties(this, 'team', 'enemy', 'plays');

    for (const [i, play] of this.plays.entries()) {
      if (!(play instanceof Play)) {
        console.warn(play)
        throw new Error(`Play not of class Play in ${this.name} (${i})`)
      };
    }
  }
}

const matchups = [];
