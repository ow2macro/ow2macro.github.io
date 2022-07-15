class Descriptor {
  symbol;
  full;
  short;
  id;

  [Symbol.toPrimitive]() { return this.symbol }

  constructor(full, short) {
    this.symbol = Symbol(full);
    this.full = short;
    this.short = full;
    this.id = Descriptor.n++;
    if (full) this.full = full;
    if (short) this.short = short;
  }

  get name() {return this.full};

  static n = 0;
}
