class FightPhases {
  poke;
  engage;
  mid;
  decay;

  constructor(poke, engage, mid, decay = 0.5) {
    this.poke = poke;
    this.engage = engage;
    this.mid = mid;
    this.decay = decay;

    this.normalize();
  }

  factor() {
    return this.arr().reduce(util.add);
  }

  arr() {
    return [this.poke, this.engage, this.mid]
  }

  normalize() {
    const factor = this.factor();
    [this.poke, this.engage, this.mid] = this.arr().map(x=>x/factor);
  }
}
