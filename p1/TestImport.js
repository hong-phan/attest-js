let Person = require('./Person.js');

//let mia = new Person('Mia',20);
//let john = new Person('John', 25);

//console.log(mia.getName(), mia.getAge());
//console.log(john.getName(), john.getAge());

let bob = new Person('bob');
console.log(bob.name);

bob.name = 'BOB'; // call setter
console.log(bob.name);