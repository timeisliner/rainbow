class plugins {

  constructor(name, type){
    this.n = name;
    this.t = type;
  }

  get name(){
    return this.n
  }
  
  get type(){
    return this.t
  }
}

exports.CLASS = plugins;