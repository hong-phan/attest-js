class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

let bob = new Person('Bob',20);
console.log(bob.getName());
console.log(bob.getAge());