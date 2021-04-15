let Person = {
    name: "Lan Anh",
    age: "25",

    getPersonalInfo: function(){
        console.log("Name: "+ this.name);
        console.log('Age: ' + this.age);
    }
}
Person.getPersonalInfo();