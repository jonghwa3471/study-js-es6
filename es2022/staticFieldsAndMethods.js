class Counter {
  #count = 0;
  static description = "Count up to five.";
  static isMyChild(instance) {
    return instance instanceof Counter;
  }
  get count() {
    return this.#count;
  }
  plus() {
    if (this.#count === 5) {
      this.#reset();
    } else {
      this.#count++;
    }
  }
  #reset() {
    this.#count = 0;
  }
}

const c = new Counter();
c.plus();
c.plus();
c.plus();
c.plus();
c.plus();
c.plus();
console.log(c.count);
console.log(c.description);
console.log(Counter.description);
console.log(Counter.isMyChild(c));
