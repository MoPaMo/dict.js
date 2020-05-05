class dict {
  constructor() {
    this.key = [];
    this.value = [];
  }
  get length(){
    return this.key.length
  }
  add(a, b){
    if (b!=null)
      if(b!=null)if this.key.indexOf(a) ==-1){
    this.key.push(a);
    this.value.push(b)}
    
    
  }
  
  getByKey(a){
    this.pos = this.key.indexOf(a);
    return this.value[this.pos]
    
  }
}

var dictionary = new dict();
dictionary.add("hi", "tschüss");
dictionary.add("hi","bye")
console.log(dictionary.getByKey("hi"))
