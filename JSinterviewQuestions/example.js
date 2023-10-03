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
