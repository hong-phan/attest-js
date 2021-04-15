class Person {

    constructor(name){
        this._name = name; //_name: la nhung private class/private property/private function duoc dung trong class do
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name
    }

}

module.exports = Person