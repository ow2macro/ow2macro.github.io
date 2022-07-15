class Playbook extends Map {
  _order = new Set();

  add(play) {
    if (!(play instanceof Play)) throw new Error(`Play not of class Play`);
    this._order.add(play.group);
    this.set(play.name, play);
  }

  get order() {
    return Array.from(this._order);
  }
}

class Play extends Descriptor {
  description;
  details;

  constructor(name, group, description, details) {
    super(name);
    this.group = group;
    this.description = description;
    this.details = details;
  }
}

const playbook = new Playbook();
