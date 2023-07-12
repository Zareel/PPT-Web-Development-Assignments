//? What is the difference between Synchronous and Asynchronous?
//* Synchronous
/*
console.log("First");
console.log("Second");
console.log("Third");
*/

//* Asynchornous
/*
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
console.log("Third");
*/

//? 3. setTimeOut() and setInterval
//* setTimeOut()
/*
console.log("I'm first");
setTimeout(() => {
  const wait = () => {
    console.log("I'm 2 seconds late");
  };
  wait();
}, 2000);
*/

//* setInterval()
/*
setInterval(() => {
  console.log("Hello");
}, 2000);
*/

//? async function
/*
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

async function myFunction() {
  return "hello";
}
console.log(myFunction());
*/
//? 5. callback hell
/*
firstFunction(arg, function(){
    secondFunction(arg, function(){
        thirdFunction(arg, function(){
            //so on
        })
    })
})
*/
//? 7. async await
/*
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
*/

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
