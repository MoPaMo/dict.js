/*dict.js (c) Moritz Mockenhaupt 2020*/
class dict {
  constructor() {
    this.key = [];
    this.value = [];
  }
  get length() {
    return this.key.length;
  }
  add(a, b) {
    if (a != null) {
      if (b != null) {
        if (this.key.indexOf(a) == -1) {
          this.key.push(a);
          this.value.push(b);
        } else {
          throw "Key " + a + " exists already";
        }
      } else {
        throw "Value (" + b + ") cannot be null";
      }
    } else {
      throw "Key (" + a + ") cannot be null";
    }
  }
  getByKey(a) {
    this.pos = this.key.indexOf(a);
    return this.value[this.pos];
  }
  k(a) {
    return this.getByKey(a);
  }
}

