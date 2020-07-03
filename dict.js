/*Dictionary class 
(c) Moritz Mockenhaupt 2020
*/

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
  k(a){
  getByKey(a);
  }
}
/*
use new dict() to create a new dictionary
var dictionary = new dict();

use add(key, value) to add values to the dictionary
dictionary.add("hi", "bye");
dictionary.add("i", "bye bye");
dictionary.add("h", 15);

use getByKey to get a value by it's key
console.log(dictionary.getByKey("hi")); //bye

use .length to get the number of all the keys
console.log(dictionary.length); //3



*/
