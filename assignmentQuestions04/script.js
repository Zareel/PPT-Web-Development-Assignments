//? 1. Hoisting
/*
//* variable hoisting
firstName = "Zareel";
console.log(firstName);
var firstName;

//* function hoisting

getName();
function getName() {
  var lastName = "Kalam";
  console.log(lastName);
}

fullName();
let fullName = () => {
  var fName = "Zareel Kalam";
  console.log(fName);
}; // RefferenceError
*/
//! ==============================================================================

//? 2. Temporal Dead Zone

{
  //TDZ starts here
  //TDZ
  //TDZ
  console.log(myHobby); // ReferenceError: Cannot access 'myHobby' before initialization
  //TDZ
  //TDZ
  let myHobby = "Coding"; //TDZ ends here
  //TDZ doesn't exist here
  //TDZ doesn't esist here
  console.log(myHobby);
}

{
  //TDZ starts here
  //TDZ
  //TDZ
  let myHobby; // TDZ ends here
  console.log(myHobby); // output: undefined
  myHobby = "Reading"; // TDS doesn't exist here
  console.log(myHobby); // output: Reading   TDS doesn't exist here
}

//!==============================================================================

//? 3. Difference between var and let

// var myColor = "black";
// function color() {
//   var favColor = "Purple";
// }
// console.log(myColor);

// var myColor = "White";
// console.log(myColor);

// var myCar = "Ford";
// myCar = "Rav4";
// console.log(myCar);
/*
var greeter = "Hello";
if (true) {
  var greeter = "Hi";
  console.log(greeter);
}
console.log(greeter);

let greeting = "Hello";
if (true) {
  let greeting = "Hi";
  let sayHey = "Hey";
  console.log(greeting);
}
console.log(sayHey);
console.log(greeting);

*/
// let firstName = "Zareel";
// firstName = "Sidhu";
// console.log(firstName);

// console.log(place);
// let place = "Kochi";

// console.log(place);
// var place = "Kochi";

//!==========================================================
//? 5. let and const
/*
let lastName = "Kannan";
lastName = "Zareel";
console.log(lastName);

const firstName = "Sidhu";
firstName = "Zara";

const getName = {
  firstName: "Sidhu",
  times: 4,
};
getName.firstName = "Zareel";
console.log(getName.firstName);
*/

//!==================================================

//? Template literals
/*
let place = `I live in Kochi`;
console.log(place);

// quotes inside template llteral
let text = `Shine said "Hi", hi's in Canada `;
console.log(text);

//multiline string
let message = `Shine scored 100% for his exam.
He is very happy`;
console.log(message);

// variables in string
let firstName = "Zareel";
let lastName = "Kalam";
let fullName = `My full name is ${firstName} ${lastName}.`;
console.log(fullName);

// expression in string
let price = 200;
let discountPercentage = 5;
let totalPrice = `The total payable amount is ${(price * discountPercentage) / 100}`;
console.log(totalPrice);
*/
//!===========================================================================
//? 8. Destructuring
//* Array
/*
let cars = ["Ecosport", "Rav4", "City", "i20"];
let [Ford, Toyota, Honda, Huyudai] = cars;
console.log(Toyota);
console.log(Huyudai);
*/
//* ...rest operation
/*
let cars = ["Ecosport", "Rav4", "City", "i20"];
let [Ford, ...others] = cars;
console.log(Ford);
console.log(others);
*/

//* Destructuring operatin with functions
/*
function getCar() {
  return ["Ecosport", "Rav4", "City", "i20"];
}
let [Ford, , Honda] = getCar();
console.log(Ford);
console.log(Honda);
*/

//* Swapping values
/*
let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a);
console.log(b);
*/

//* Basic object destructuring
/*
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Ford, Toyota, Honda, Huyundai } = cars;
console.log(Ford);
console.log(Honda);
*/
//* if we want to assign values to a new variable then we can do this
/*
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Toyota: fourWheelDrive, Huyundai: car } = cars;
console.log(fourWheelDrive);
console.log(car);
*/
//* Array as value
/*
let cars = { Ford: "Ecosport", Toyota: ["Rav4", "Land Cruiser", "Prado"] };
let { Ford, Toyota } = cars;
console.log(Toyota);
*/
//* rest in object destructuring
/*
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Ford, Toyota, ...others } = cars;
console.log(others);
*/
//!===============================================================
//? default value for parameters
/*
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 10)); //50
console.log(multiply(5)); //5
*/

//!================================================================

//? Spread operator
//*with array
/*
let cars1 = ["Ford", "Toyota", "Honda", "Huyudai"];
let cars2 = [...cars1, "BMW", "NISSAN"];
console.log(cars2);
*/

//*with object
/*
let cars1 = { Ford: "Ecosport", Toyota: "Rav4" };
let cars2 = { ...cars1, Honda: "City", Huyundai: "i20" };
console.log(cars2);
*/
