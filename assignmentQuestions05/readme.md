## 1. What is the difference between Synchronous and Asynchronous?

- Synchronous: means to be in sequence. Every statement of the code gets executed one by one. The next line of code will not be executed untill the current line of code completes its execution

```js
//* Synchronous

console.log("First");
console.log("Second");
console.log("Third");

/*output
First
Second
Third
*/
```

- Asynchronous: Asynchronous code allows the code to be executed immediately where the synchronous code will block further execution of the remaining code untill it finishes the current code

```js
//* Asynchornous
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
console.log("Third");

/*output
First
Third
Second
```

## 2. What are web APIs

- API stands for Application Programming Interface.
- Web API is an application programming interface for the web.
- It is a construct made available in programming languages to allow developers to create complex functionality more easily
- They abstract more complex code away from you and provide some easier syntax to use in it's place

## 3. Explain setTimeOut and setInterval

- setTimeOut sets a timer which executes a function or specified piece of code once the timer expires

```js
console.log("I'm first");
setTimeout(() => {
  const wait = () => {
    console.log("I'm 2 seconds late");
  };
  wait();
}, 2000);
```

-setInterval method() repeatedly calls a function or execute a code snippet with a fixed time delay between each call

```js
setInterval(() => {
  console.log("Hello");
}, 2000);
// prints Hello in every two seconds
```

## 4. how can you handle Async code in JavaScript ?

The keyword async before a function makes the function return a promise
An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

```js
function resolveAfter2Sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Sec();
  console.log(result);
}
asyncCall();
```

## 5. What are Callbacks & Callback Hell?

- callback is a function that is passed as a parameter in another function

```js
setTimeOut(() => {});
```

- callback hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic the callback hell looks like the below

```js
firstFunction(arg, function () {
  secondFunction(arg, function () {
    thirdFunction(arg, function () {
      //so on
    });
  });
});
```

## 6. What are Promises & Explain Some Three Methods of Promise

Promises are used to handle asynchronous operations in javascript. They provide an alternative approach for callbacks by reducing callback hell and writing the cleaner code
The three states of promises are:

- fullfilled(): This state represents that the promise has been fullfilled, means the async operation is completed
- pending(): means the operatin has neither been resolved nor been rejected. It is in the pending state
- rejected(): means the promise has been rejected

```js
const promise = new Promise(function(resolve,  reject) =>{
    //promise description
})

```

## 7. What’s async & await Keyword in JavaScript

The async function declration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, anabling asynchronouse promise based behaviour to be written in a cleaner style and avoiding the need to explicitly configure promise chains

```js
function waitFor2Sec() {
  return new Promise((resole) => {
    setTimeout(() => {
      console.log("in two seconds");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("On time");
  const result = await waitFor2Sec();
  console.log(result);
}
asyncCall();
```

## 8. Explain Purpose of Try and Catch Block & Why do we need it?

The ojective of a try catch block is to try and do something which could fail and raise an exception. After catching an excetion,deal with it gracefull rather than crashing

```js
try {
    //statements that might cause exception
}catch(error){
    console.log(error)
    res.status(500).json(){
        success: false,
        message: "error message"
    }

}
```

## 9. Explain fetch

- fetch() method provides an easy and logical way to fetch resources asychronously accross the network

```js
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch(error){
    console.log(error)
}
```

## 10. How do you define an asynchronous function in JavaScript using async/await?

- An async function declaration creates a binding of a new async function to a given name. The await keyword is created within the function body anabling asynchornous promise based behaviour to be written in a cleaner style and avoiding the need to explicitly configure promise chain

```js
function waitAsecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Will be there in a second");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("on time");
  const result = await waitAsecond();
  console.log(result);
}
asyncCall();
```
