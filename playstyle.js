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
    const factor = this.factor();
    if (factor > 0) {
      [this.sustain, this.range, this.mobile] =
        [this.sustain, this.range, this.mobile].map(x=>x/factor);
    }
  }

  arr() {
    return [this.sustain, this.range, this.mobile];
  }

  measure() {
    return this.mobile - this.sustain;
  }

  factor() {
    return [this.sustain, this.range, this.mobile].reduce((acc, a) => acc + a, 0);
  }
}
