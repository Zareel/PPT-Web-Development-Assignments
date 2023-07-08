# 1. Explain hoisting in JavaScript

Ans: Hoisting is a JavaScript mechanism where the declaration of variables and functions are moved to the top of their scope before the execution of the code
We declare variable usig `let`, `var`, and `const` keywords and assign values to the variables using assignment operator.

### Variabel Hoisting

The following is the sequence in which variable declaration and initialization occur.

```js
let firstName; //declaring variable
firstName = "Zareel"; //assigning value
console.log(firstName); //usage
```

JavaScript allows us to declare a variable and assign value in one step

```js
let firstName = "Zareel";
```

In JavaScript a variabe can be declared once it is used. The interpreter appears to move the declaration of variables, functions or classes to the top of their scope before the execution of the code. This process is called `hoisting`

```js
firstName = "Zareel";
console.log(firstName);
var firstName; // output: Zareel
```

In the above example we have used `var` keyword to declare a variable
Using `let` keyword will result in ReferenceError
Using `const` keyword for declaration will trow a syntax error. The code won't run.

JavaScript hoists only declations, not assignments or initializations

### Function Hoisting

Function declarations are hoisted too. Function hoisting allows us to call a function before it is defined.

```js
getName();
function getName() {
  var lastName = "Kalam";
  console.log(lastName); //output: Kalam
}
```

Note that if the function is used as an expression and we try to access is before the assignment an error will occur. This is becuase only declarations are hoisted not function expressions

```js
fullName();
let fullName = () => {
  var fullName = "Zareel Kalam";
  console.log(firstName);
};
//output: ReferenceError: Cannot access 'fullName' before initialization
```

# 2. Explain Temporal Dead Zone (TDZ)

Ans: A Temporal Dead Zone is the area of a block where a variable is inaccessible untill the variable is initialized with a value

In the example below temporal dead zone starts at the opeing curly bracket and ends when the variable is initialized with the value "Coding"

```js
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
}
```

When you run the above code, the console.log() statement will return a RefferenceError. Because we used the consolelog() code to access `myHobby` variable before it's initialization.

What happens if we use `var` keyword? How does it differ from `let` or `const` variables

```js
{
  //TDZ starts here
  //TDZ
  //TDZ
  console.log(myHobby); // output:  undefined
  //TDZ
  //TDZ
  var myHobby = "Coding"; //TDZ ends here
  //TDZ doesn't exist here
  //TDZ doesn't esist here
  console.log(myHobby); // ourput: Coding
}
```

When we run the about code, we will see that the first console.log() returns undefined. Because JavaScript automatically assign `undefined` to a hoisted `var` variable. In other words, when JavaScript hoists a variable declated with `var` keyword, it automatically initializes the variable with a value undefined

In contrast, Javascript does not initialize a `let` or `const` variable with any value whenever it hoist a variable. Instead the variable remains dead or inaccessible.

So a `let` of `const` variable's TDZ ends when JavaScript fully initializes it with the value specified during it's declaration

# 3. Difference between `var` and `let`

Ans:

## var keyword

- Variable declared with `var` keyword is global scoped as well as function scpoed

```js
var favColor = "Purple"; // global scope

function color() {
  var favColor = "purple";
}
console.log(favColor); // function scope
//output => ReferenceError: favColor is not defined
```

- Can redeclare and reassign

```js
var color = "black";
console.log(color);

var color = "white";
console.log(color);

//output: black white
```

- retun undefined when use before initialization

```js
console.log(place);
var place = "Kochi"; // undefined
```

- can cause unforseen bugs

```js
var greeter = "Hello";
if (true) {
  var greeter = "Hi";
  console.log(greeter);
}
console.log(greeter);
//output: Hi Hi
```

For that reason `let` keywork was introduced

## let keyword

- `let` keyword is block scoped: Variables declared inside a block, if-else condition or switch-case, with `let` keyword can be accessed only from within the block or condition of case.

```js
let greeting = "Hello";
if (true) {
  let greeting = "Hi";
  let sayHey = "Hey";
  console.log(greeting); //Hi
}
console.log(greeting); // Hello
console.log(sayHey); //ReferenceError: sayHey is not defined

//output: Hi Hello
```

- Can't be redeclared

```js
let firstName = "Sidhu";
let firstName = "Zareel"; //SyntaxError: Identifier 'firstName' has already been declared
```

- Can reassign the value

```js
let firstName = "Sidhu";
firstName = "Zareel";
console.log(firstName); // Zareel
```

- cannot use before initialization

```js
console.log(place);
let place = "Kochi"; // ReferenceError: Cannot access 'place' before initialization
```

# 4. What are the major features introduced in ECMA Script6?

- Block scoping
- Arrow function
- Temporal Dead Zone
- Parameter Default Values
- Destructuring in ES 6
- Enhanced Object Leterals

# 5. What is the difference between `let` and `const`?

Ans:
Variables declared using `let` keyword can be re-assigned

```js
let lastName = "Kannan";
lastName = "Zareel";
console.log(lastName); // Zareel
```

Variables declared using `const` keyword cannot be re-assigned

```js
const firstName = "Sidhu",
  firstName = "Zara"; // TypeError: Assignment to constant variable.
```

# 6. What is template literal in ES6 and how do you use them?

Ans: Template literal in ES6 provides new features to create a string that gives more control over dynamic strings. Template literal uses back-ticks (``) rather than quotes to define a string.

```js
let place = `I live in Kochi`;
```

- with template literals, you can use both single and double quotes

```js
let text = `Shine said "Hi", hi's in Canada `;
```

- Template literal allows mutiline string

```js
let message = `Shine scored 100% for his exam.
He is very happy`;
// Shine scored 100% for his exam.
// He is very happy
```

- Template literals provide an easy way to interpolate variables and expressions into string

```js
let firstName = "Zareel";
let lastName = "Kalam";
let fullName = `My full name is ${firstName} ${lastName}.`;
console.log(fullName); //My full name is Zareel Kalam.
```

- expressions in string

```js
let price = 200;
let discountPercentage = 5;
let totalPrice = `The total payable amount is ${
  (price * discountPercentage) / 100
}`;
console.log(totalPrice); //The total payable amount is 10
```

# 7. How can you destructure arrays and objects in ES6

Ans:
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. Means, we can extract data from arrays and objects and assign them to variables

- Basic Array Destructuring

```js
let cars = ["Ecosport", "Rav4", "City", "i20"];
let [Ford, Toyota, Honda, Huyudai] = cars;
console.log(Toyota); // Rav4
console.log(Huyudai); // i20
```

- Assigning the rest of an array

```js
let cars = ["Ecosport", "Rav4", "City", "i20"];
let [Ford, ...others] = cars;
console.log(Ford); // Ecosport
console.log(others); // [ 'Rav4', 'City', 'i20' ]
```

- Destructuring assingment with functions

```js
function getCar() {
  return ["Ecosport", "Rav4", "City", "i20"];
}
let [Ford, , Honda] = getCar();
console.log(Ford); // Ecosport
console.log(Honda); // City
```

- Swapping values using destructuring

```js
let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a); //10
console.log(b); //5
```

- Basic Object destructuring

```js
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Ford, Toyota, Honda, Huyundai } = cars;
console.log(Ford);
console.log(Honda);
```

- if we want to assign values to a new variable then we can do this

```js
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Toyota: fourWheelDrive, Huyundai: car } = cars;
console.log(fourWheelDrive); //Rav4
console.log(car); //i20
```

- Array as value

```js
let cars = { Ford: "Ecosport", Toyota: ["Rav4", "Land Cruiser", "Prado"] };
let { Ford, Toyota } = cars;
console.log(Toyota); // [ 'Rav4', 'Land Cruiser', 'Prado' ]
```

- rest in object destructuring

```js
let cars = { Ford: "Ecosport", Toyota: "Rav4", Honda: "City", Huyundai: "i20" };
let { Ford, Toyota, ...others } = cars;
console.log(others); //{ Honda: 'City', Huyundai: 'i20' }
```

# 9. How can you define default parameter values in ES6 functions

Ans: Default function parametes allow named parameters to be initialized with default values if no value of undefined is passed

```js
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 10)); //50
console.log(multiply(5)); //5
```

In the above example, no value is provided for b when multiply is called, then b's default value is used when evaluating a \* b and the result is 5. If default value is not given, then the it would return NaN

```JS
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10)); //50
console.log(multiply(5)); //NaN
```

# 10. What is the purpose of spread operator in ES6

Ans:
Spread syntax looks exactly like rest syntax. But in a way spread syntax is opposite to rest syntax
Spread sysntax expands an array into it's elements while rest syntax collects multiple elements and condenses them into single element

- spread operator with array

```js
let cars1 = ["Ford", "Toyota", "Honda", "Huyudai"];
let cars2 = [...cars1, "BMW", "NISSAN"];
console.log(cars2);
// [ 'Ford', 'Toyota', 'Honda', 'Huyudai', 'BMW', 'NISSAN' ]
```

## Thus spread operator allows us to copy all the elements from the existing array or object into another array or object

- spread operator with object

```js
let cars1 = { Ford: "Ecosport", Toyota: "Rav4" };
let cars2 = { ...cars1, Honda: "City", Huyundai: "i20" };
console.log(cars2);
// { Ford: 'Ecosport', Toyota: 'Rav4', Honda: 'City', Huyundai: 'i20' }
```
