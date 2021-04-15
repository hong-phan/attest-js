class Human {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getPersonalInfo(){
        console.log('name: '+this._name);
        console.log('Age: '+ this._age);
    }
}

module.exports = Human;