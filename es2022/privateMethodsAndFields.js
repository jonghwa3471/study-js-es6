class Counter {
  #count = 0;
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
