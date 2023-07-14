## Q.1 What’s Constructor And Its Purpose?

Ans: A constructor is a function that does initialization of an object when the object is created. Arguments are passed to the constructor function when you use the new keyword. There are two types of constructors, one defined as a function, and one defined with the constructor method in a class.

- function constructor: To use a constructor function to create objects, simply define a JavaScript function with any number of arguments. Inside the function, the keyword this is used as a placeholder for the object being created. If the constructor function is used by itself, without the new statement, this will have no value.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Rav4", 2010);
const car2 = new Car("Ford", "Ecosport", 2023);

console.log(`Car 1 is ${car1.model}, ${car1.make} ${car1.year} model.`);
console.log(`Car 2 is ${car2.model}, ${car2.make} ${car2.year} model.`);

/* output
Car 1 is Rav4, Toyota 2010 model.
Car 2 is Ecosport, Ford 2023 model.
*/
```

- class constructor: When defining a class in javascript, there is a special constructor method defined within it. Like the object constructor function, the constructor method can be defined with any number of arguments, and the this keyword can be used as a placeholder for the object being created.

```js
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

/* output
Car 1 is Rav4, Toyota 2010 model.
Car 2 is Ecosport, Ford 2023 model.
*/
```

## Q.2 Explain This Keyword and Its Purpose?

### In JavaScript `this` keyword reffers to an object, not a variable. You cannot change the value of `this`

### The value of `this` depends on in which context it appears, function, class or global

The `this` keyword in javascript is a reserved keyword that helps target certain objects of functions. It refers to the object that owns or invokes the function or method currently being executed. It can also refer to the global object, the DOM element or different objects depending on how it is used. The main purpose of `this` keyword is to give methods access to their objects and to make code reusable

- `this` in a Method

```js
const person = {
  firstName: "Zareel",
  lastName: "Kalam",
  id: 1111,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(`${person.firstName} ${person.lastName}`);

// Zareel Kalam
```

- When used alone `this` refers to a global onject

```js
let x = this;
console.log(x);
//output  {}
```

- `this` in a function

- in non-strict mode `this` is always reference to an object and in strict mode it can be any value

## Q.3 What’s Call Apply Bind Method & Difference Between them

### call()

The call method invokes a function with a given `this` value and arguments provided one by one

```js
const user1 = { firstName: "Zareel", lastName: "Kalam" };
const user2 = { firstName: "Shon", lastName: "Leo" };
function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}
greet.call(user1, "Hello", "How are you?");
greet.call(user2, "Hey", "What's up?");

//Hello Zareel Kalam, How are you?
//Hey Shon Leo, What's up?
```

### apply()

Invokes the function and allows you to pass in arguments as an array

```js
const user1 = { firstName: "Zareel", lastName: "Kalam" };
const user2 = { firstName: "Shon", lastName: "Kalam" };

function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2
  );
}
greet.apply(user1, ["Hello", "How are you?"]);
greet.apply(user2, ["Hey", "What's up?"]);

//Hello Zareel Kalam How are you?
//Hey Shon Kalam What's up?
```

### bind()

Returns a new function allowing you to pass in an array and any number of arguments

```js
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

//Hello Zareel Kalam How are you?
//Hey Shon Kalam What's up
```

## Q.4 Explain OOPS ?

Object Oriented progamming(OOP) is a programing paradigm fundamental to many programming languages. JavaScript is an Object Oriented Language. Most of the elements in JavaScript are object except the primitive datatypes
The three main concepts of OOP are

- classes and instances
- inheritance
- encapsulation

## Q.5 Whats Abstraction and Its Purpose?

Abstraction is a way of hiding the implementation details and showing only the functionality to the users. JavaScript is an Object Oriented Language and most of the elements in JavaScript are objects except the primitive datatypes. In OOP the concept of abstraction is to hide the implementation details and showcase the essential of the object to the users

### purposes:

- to avoid wring low level code
- to avoid code duplication increased reusability
- to increase security of an application or program as only important details are provided to the user
- can change internal implementation of the classes without affecting the user

## Q.6 Whats Polymorphism and Purpose of it?

Polymorphism is one of the core concept of Object Oriented programming languages where poly means many and morphism means transforming one form to another. It is the presentation of one iterface for multiple datatypes

### purposes:

- programmers can use the same method name repeatedly
- polymorphism has the effect of reducing the number of functionalities that can be paired together

## Q.7 Whats Inheritance and Purpose of it?

Inheritance is a term for reusing code by a mechanism of passing down information and behaviour from a parent class to a child or subclass

### puropose:

- The pupose is to inherit the method from another class
- Inheritance is useful for code reuability: reuse properties and methods of an existing class when you create a new class

### Q.8 Whats Encapsulation and Purpose of it ?

Encapsulation is a fundamental concept in object oriented programming that refers the bundling of data and methods such that access to that data is restricted from outside the bundle. In JavaScript this can be acheived in two techniques

- by using Closure
- by using classes

## Q.9 Explain Class in JavaScript?

A class in JavaScript is basically a blueprint or template of the object. New objects can be created form a class. Unlike functions, classes in JavaScript are not hoisted. The constructor method is used to initialize

```js
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new user("Shon", 18);
console.log(user1.name);
console.log(user1.age);
```

## Q.10 What’s Super Keyword & What it does?

Super keyword is used to access and call on an object's parent.
It can be used in two ways

- As a function
- As an object

```js
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

//I have a Ford, it is a Mustang
```
