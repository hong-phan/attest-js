let Human = require('./Human.js');

class America extends Human{  // extends: de ke thua
    constructor(name, age){
        super(name, age); // goi constructor cua lop cha
    }
    getSkinColor(){
    console.log('Skin color: White');
    }
}

let bob = new America('bob', 20);
bob.getPersonalInfo(); // goi phuong thuc ra