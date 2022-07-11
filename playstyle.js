class Playstyle extends Descriptor {
  // high surviablity
  sustain;
  // far from enemy
  range;
  // anywhere
  mobile;

  constructor(name, sustain, range, mobile) {
    super(name);

    this.sustain = sustain;
    this.range = range;
    this.mobile = mobile;

    this.normalize();
  }

  normalize() {
    const characteristics = [this.sustain, this.range, this.mobile];
    const factor = characteristics.reduce((acc, a) => acc + a, 0);
    if (factor > 0) {
      [this.sustain, this.range, this.mobile] = characteristics.map(x=>x/factor);
    }
  }

  arr() {
    return [this.sustain, this.range, this.mobile];
  }

  measure() {
    return this.mobile - this.sustain;
  }
}
