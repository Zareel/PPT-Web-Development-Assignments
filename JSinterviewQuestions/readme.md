# 26-9-2023

# Tuesday

## 1. How JavaScript works?

Javascript need a cirtain tool or software to convert js code to convert into machine understandable code. The browser comes up with the compoler which can turn your js code into the executable code
There is some compiler there which can run the js code such as V8 engines, spider monkey etc
These engines are just like you install some compilers for c++ and you can run the code
NodeJS is such one implementation which can convert your stand alone javascript code so that you don't always have to attach your js code to html and hit a reload every single time

## ECMAscript

- Europian Computer Manifacturing Association

## 2. ES6

- It is language specification means guidelines to follow

## 3. varibales

- declaring a variable is reserving some space in the memory

## 4. datatypes

- string
- number
- boolean
- undefined
- null
- symbol
- bigint
- object

declare a variable using let keyword

## 5. What is Primitive and Non-primitive data type in JS? or What is difference between primitive and non-primitive data types? or What is difference between null and undefined data types?

Ans: Every variable has a datatype that tells what kind of data is being stored in the variable. There are two types of data types in JavaScript

- Primitive datatypes : The in-built data types provided by Javascript is known as primitive data types
  eg :

1. number: numbers
2. string: sequence of characters enclosed in single or double quotes
3. undefined: value is not assinged
4. boolean: true or false
5. null: represents the intensional absence of any object value
6. bigint: represents numeric value which are too big to be represented by number
7. symbol: symbol data type is used to create unique objects

- Non Primitive datatypes: The datatypes that are derived from primitive data types are known as non-primitive data types
  eg:

1. object: enclosed in curly braces and they are in the form of key value pairs
2. array: collection of related data enclosed in the square brackets and seperated by comma

<br>

## 6. What is difference between == and === operators?

- `==` is known as loose equality operator which is mainly used to compare two values in both sides and then return true or false.
- `===` is also known as strict equality operator. It compares both the values and datatypes

<br>

## 7. Explain the implicit type coercion in javascript.

- implicit type coercion: it is the automatic or implicit conversion of values from one data type to another data type. eg: `==` operator compares two values only after converting them in to a common type which is known as `type coersion`.

<br>

## 8. What is a NaN property in JS?

Ans: The NaN global property is a value representing Not-A-Number
The operations that return NaN are:-

- Failed number conversion
- Math operation where the result is not a real number
- Where the invalid value is to be represented as a number

## 9. Explain pass by value and pass by reference in JavaScript.

In JavaScript when a function is called, the arguments can be passed in two ways, either

- pass by value or
- pass by reference(address)
  Primitive datatypes are passed by value and non primitive data types are passed by reference
  Primitive values are stored on the stack and non primitive values are stored in heap

  ## 10. Everythig in javascrip is an object prove

  Answer is prototype. All javascript programming contrains inherits properties and methods from a prototype. whenever we create array, function, class etc, JavaScript takes the Prototype methods of it and creates an object named **proto** and attaches it with the object.

for eg.
creata an array = [1,2,3,4,] in your browser console and typs array.**proto** then enter. then you can see that array was able to access methods like push, length, etc. That means, any array that you create in JavaScript will inherit values from Array.prototype.
If you observe the last parameter it is prototype: object which means array's prototype was derived from object's prototype. Functions, classes arrays etc are derived from object's prototype. Thus every thind in javascript is an object

---

# 1-October-2023

# Sunday

## 1. Explain context in JavaScript

- JavaScript context refers to the object or environment thet a function or code is exectuted in
- When the code is executed by node the global context(window) is not available. But there is always a global context available to us in the browser as well as in the node but it can be having different name still it is there
- That context is always responsible so that once the function is being registered, that function is wrapped up

## 2. explain two types of context

- The two type of contexts are global context and execution context
- As soon as we write code, context kicks in, collecting information about the code. This global context is window object and it is tied mojorly on the browser
- the execution context keeps on stacking one on the top of the other
- these exectuion context is not only with the funcions and thay happens with every line of code that you want to execute
- When I write a function code global context kicks in and when i call or invoke the function execution context start woking and it will be responsible for running the function
- if the execution is of one line, it will execute and goes away from the stack and if it is a function, the entire big execution context will come and once the execution is being done then it goes away from the stack
- the execution stack which is at the top is the only thing the program knows about
- it cannot actually dig below to find out any line of code. It can only execute the code inside it's entire context

## 3. features of execution context

- variable object
- scope chain
- `this` keyword

## 4. mention the two rules that you have to follow when there is execution context

- function declarations are scanned and made available
  (we are able to call the function first and then to define the function. This is possible because of the global context, as it scanns the entire code and and make the entire code available to us if it is declared.)
- varible declrations are scanned and mede undefined

## 5. What do you mean by strict mode in JavaScript?

- Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context.
- This strict context prevents certain actions from being taken and throws more exceptions.

---
what is scope chining
What is hoisting
What is Temporal Dead Zone?
What is difference between let, var and const?
Why do we use debugger word in javascript?
What is function?
What is IIFE?
What is HOF?
Explain map, filter and reduce?
Explain this keyword in javascript.
Explain window keyword in javascript.
Explain call, apply and bind in javascript.
What is regex in javascript?
What is currying in javascript?
Explain scope and scope chaining in javascript.
Explain closure in javascript.
What is callback function in javascript?
Explain the concept of Memoization in javascript.
What is DOM?
What is difference between DOM and BOM?
What is difference between Client side and server side javascript?
What is an Arrow function? Explain the difference between normal function and arrow function.
What is difference between rest and spread operators?
What is promise in javascript?
What is call stack?
What is difference between local storage and session storage?
Explain the working of setTimeOut and setInterval.
What is asynchronous javascript?.
Explain the execution of a javascript code.
Explain destructuring.
Explain prototype in javascript.
What is OOJS? 40: What is ES6 and what were the new improvements in it?
What is Node JS? Why it is needed in javascript?
What is babel? What is the need of it in javascript?
Explain the class keyword on ES6.
What is class constructor?
What is difference between object constructor and function constructor?
What are the features of JavaScript?
What are the different ways to create an object?
What are the conventions of naming a variable in javascript?
What are imports and exports in javascript?
What is difference between document and window in javascript?
What do you mean by statically typed and dynamically typed language?
What is difference between exec() and test() methods?
What are the advantages of using the external javascript?
What are the types of errors in javascript?
What are generator functions?
What is a weakSet and weakMap?
What is difference between prototypal and classical inheritance?
What is difference between event capturing and event bubbling?
What is pure and impure function?
What is difference between nodelist and html collection?
