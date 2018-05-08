console.log("Entered ES6-class-test.js");

class Person{
    constructor(name = "Anonymous", age = 0){

        this.name = name;
        this.age = age;
        console.log("Person Constructor executed");
}

greet(){
    return `Hey, this is ${this.name} , ${this.age} years old`;
}
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
        console.log("Traveller constructor loaded");
    }

    greet(){
        return `Hey, this is ${this.name} , ${this.age} years old from ${this.homeLocation}`;
    }

}

const person = new Person("a");
const traveller = new Traveller("travellerDude",40,"chennai ");
console.log(person);
console.log(traveller);
console.log(person.greet());
console.log(traveller.greet());