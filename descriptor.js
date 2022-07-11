class Descriptor {
  symbol;
  full;
  short;

  [Symbol.toPrimitive]() { return this.symbol }

  constructor(full, short) {
    this.symbol = Symbol(full);
    this.full = short;
    this.short = full;
    if (full) this.full = full;
    if (short) this.short = short;
  }

  get name() {return this.full};
}
