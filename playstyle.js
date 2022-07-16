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
        this.arr().map(x=>x/factor);
    }
  }

  arr() {
    return [this.sustain, this.range, this.mobile];
  }

  measure() {
    return this.mobile - this.sustain;
  }

  normalizedMetrics() {
    const max = Math.max(...this.arr()) || Infinity;
    return {
      sustain: this.sustain / max,
      range: this.range / max,
      mobile: this.mobile / max,
    }
  }

  factor() {
    return this.arr().reduce((acc, a) => acc + a, 0);
  }
}
