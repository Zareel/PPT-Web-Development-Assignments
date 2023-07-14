//? 1
//* function constructor
/*
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Rav4", 2010);
const car2 = new Car("Ford", "Ecosport", 2023);

console.log(`Car 1 is ${car1.model}, ${car1.make} ${car1.year} model.`);
console.log(`Car 2 is ${car2.model}, ${car2.make} ${car2.year} model.`);
*/

//* class constructor
/*
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Rav4", 2010);
const car2 = new Car("Ford", "Ecosport", 2023);

console.log(`Car 1 is ${car1.model}, ${car1.make} ${car1.year} model.`);
console.log(`Car 2 is ${car2.model}, ${car2.make} ${car2.year} model.`);
*/
//? this keyword
//*in a method
/*
const person = {
  firstName: "Zareel",
  lastName: "Kalam",
  id: 1111,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(`${person.firstName} ${person.lastName}`);
*/
//*  alone
/*
let x = this;
console.log(x);
*/

//? call(),  apply(),  bind()
//* call()
/*
const user1 = { firstName: "Zareel", lastName: "Kalam" };
const user2 = { firstName: "Shon", lastName: "Leo" };
function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}
greet.call(user1, "Hello", "How are you?");
greet.call(user2, "Hey", "What's up?");
*/

//*apply()
/*
const user1 = { firstName: "Zareel", lastName: "Kalam" };
const user2 = { firstName: "Shon", lastName: "Kalam" };

function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}
greet.apply(user1, ["Hello", "How are you?"]);
greet.apply(user2, ["Hey", "What's up?"]);
*/

//*bind()
/*
const user1 = { firstName: "Zareel", lastName: "Kalam" };
const user2 = { firstName: "Shon", lastName: "Kalam" };

function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}

const inviteUser1 = greet.bind(user1);
const inviteUser2 = greet.bind(user2);

inviteUser1("Hello", "How are you?");
inviteUser2("Hey", "What's up");
*/
//? 09 classes
/*
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new user("Shon", 18);

console.log(user1.age);
*/
//? 10 super keyword

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
