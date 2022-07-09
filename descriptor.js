class Descriptor {
  full;
  short;

  constructor(full, short) {
    this.full = short;
    this.short = full;
    if (full) this.full = full;
    if (short) this.short = short;
  }
}
