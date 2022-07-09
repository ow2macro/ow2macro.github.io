class Playstyle extends Descriptor {
  sustain;
  range;
  mobile;

  brawl;
  poke;
  dive;

  flags;

  constructor(name, sustain, range, mobile, ...flags) {
    super(name);

    this.sustain = sustain;
    this.range = range;
    this.mobile = mobile;

    this.brawl = sustain;
    this.poke = range;
    this.dive = mobile;

    this.flags = [flags].flat(Infinity);

    this.normalize();
  }

  normalize() {
    const characteristics = [this.sustain, this.range, this.mobile];
    const bias = Math.min(...characteristics);
    const factor = characteristics.reduce((acc, a) => acc + a, 0);
    [this.sustain, this.range, this.mobile] = characteristics.map(x=>(x-bias)/factor);
  }

  arr() {
    return [this.sustain, this.range, this.mobile];
  }
}
