//? 128 variable and datatypes in javascript

//? Q4.  NaN
/*
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise("1"));


console.log(sanitise("NotANumber"));

*/
// ==================================================================================================

//? swaping the value
/*
let a = 5;
let b = 10;
let c;

c = b;
b = a;
a = c;

console.log(a);
console.log(b);
*/

//==================================================================================
// admin = with all the access
// subadmin = access to create and delete all the courses
// test prep =  have access to create and delete tests
// user = consume all content
// others = trial user

/*

const user = "user";
switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("You get access to create and delete courses");
    break;
  default:
    console.log("You are a regular user");
}
*/
/*
const sayHello = (name) => {
  return `My name is ${name}`;
};
const result = sayHello("Zareel");
console.log(result);
*/
/*
const getUserRole = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} is admin with all the access`;
  }
};
getUserRole("Zareel", "admin");
*/

//? switch case inside a function
/*
const getUserRole = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} is admin will all the access`;
      break;
    case "subadmin":
      return `${name} is subadmin. You have access to create and delete all the courses`;
      break;
    case "testPrep":
      return `${name} is testPrep and you have access to create tests`;
    default:
      console.log("You are a regular user");
  }
};
const result = getUserRole("Shine", "user");
console.log(result);
*/

//? Scope chaining
/*
const name = "Shon1";
console.log(name);

function sayName() {
  const name = "Shon2";
  console.log(name);

  function sayNameAgain() {
    const name = "Shon3"
    console.log(name);
  }
  sayNameAgain();
}
sayName();
*/

//?array
/*
const numbers = [0, 10, 20, 30, 40, 50];
const letters = ["a", "b", "c", "d", "e"];
const countries = ["USA", "UK", "Iceland", "Switzerland", "Turkey"];

const isLargerNumber = (item) => item > 20;

console.log(numbers.findIndex(isLargerNumber));
*/

//? 144 callback and arrowfunction introduction in array
/*

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(12));
*/
/*
const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(98));

const arr = [25, 36, 49, 78, 101];
console.log(arr.every(isEven));
*/
//* create a function to check if the given number is odd or not
/*
const isOdd = (number) => {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isOdd(101));

const arr = [78, 59, 14, 22, 203];
const result = arr.every((item) => {
  return item % 2 === 0;
});
console.log(result);
*/
//every() is an array method the checks all the items in the array

//? 145 fill and filter in array
//? 146 slice and splice in array
//? 147 object in Javascript
//? 148 methods and objects in javascript
//? 149 forloop basics in javascript
//? 150 while and dowhile loop in javascaript
//? 151 forEach loop in javascript
//? 152 for in and for of loop in javascript
//? 153 confusing part of this in javascript
/*
let arr = [];

for (let i = 0; i < 3; i++) arr.push(i)
  console.log(arr);
console.log(i);
*/

/*
let obj = {
  name: "Zar",
  age: 44,
};
obj.place = "Kochi";
console.log(obj);
*/
/*
var printNumberTwo;
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    printNumberTwo = function () {
      return i;
    };
  }
}
console.log(printNumberTwo());
console.log(i);
*/
/*
const s = [5, 7, 2];
s.pop();
s.unshift(2);
console.log(s);
*/
/*
let obj = {
  name: "Zareel",
  nature: "awesome",
};
Object.freeze(obj);
obj.name = "Zar";
obj.newProp = "new";
console.log(obj);
*/

const zareel = {
  firstName: "Shon",
  lastName: "Kalam",
  role: "admin",
  courseCount: 2,
  getInfo: function () {
    console.log(`
    firstName: ${this.firstName},
    lastName: ${this.lastName},
    role: ${this.role},
    courseCount: ${this.courseCount}
    `);
  },
};

const shine = {
  firstName: "Shine",
  lastName: "Kalam",
  role: "owner",
  courseCount: 3,
};

let binding = zareel.getInfo.bind(shine);
console.log(binding());
