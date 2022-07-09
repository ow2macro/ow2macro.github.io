class Playstyle extends Descriptor {
  sustain;
  range;
  mobile;

  flags;

  constructor(name, sustain, range, mobile, ...flags) {
    super(name);

    this.sustain = sustain;
    this.range = range;
    this.mobile = mobile;

    this.flags = [flags].flat(Infinity);

    this.normalize();
  }

  normalize() {
    const characteristics = [this.sustain, this.range, this.mobile];
    const factor = characteristics.reduce((acc, a) => acc + a, 0);
    [this.sustain, this.range, this.mobile] = characteristics.map(x=>x/factor);
  }

  arr() {
    return [this.sustain, this.range, this.mobile];
  }
}
