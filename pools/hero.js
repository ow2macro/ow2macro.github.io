class Hero extends Descriptor {
  id;

  role = attribute.playstyle.null;
  class = attribute.playstyle.null;
  playstyle = attribute.playstyle.null;
  healing = attribute.playstyle.null;
  utility = attribute.playstyle.null;
  archetypes = [];

  constructor(options = {}) {
    super(options.name ?? options.full ?? `${options.focus}/${options.role}`, options.short);
    delete options.name;
    delete options.full;
    delete options.short;
    Object.assign(this, options);
    util.arrayifyObjectProperties(this, 'archetypes');
  }
}
