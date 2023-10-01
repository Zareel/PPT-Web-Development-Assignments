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

//? Global context
/*
function tipper(a) {
  const bill = parseInt(a);
  console.log(bill + 5);
}
tipper("5");
*/
// parseInt converts string to number
/*
console.log(parseInt("5"));
console.log("5");

const converToNumber = parseInt("5");
console.log(typeof converToNumber);

console.log(firtName);

let firtName = "Zareel";
*/

console.log(firstName);

var firstName = "Shon";

function sayMe() {
  const firstName = "Zareel";
  console.log(firstName);
}
sayMe();

console.log(firstName);
