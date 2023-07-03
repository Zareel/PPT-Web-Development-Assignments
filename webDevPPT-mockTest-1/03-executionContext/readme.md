## 3. Explain what is execution context in detail with diagram

Ans:
All Javascript code needs to be hosted and run in some kind of environment. In most cases that environment would be a web browser. For any piece of Javascript code, to be executed in a web browser a lot of processes take place behind the scenes.
When the browser encounters JavaScript code to run, it sends it to JavaScript engine. The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environent is known as execution context.
The execution context contains the code that is currently running and everything that aids in it's execution. During the execution run time, the specific code gets parsed by a parsor, the variablea and functions are stored in the memory,executable bite-code gets generated and code gets executed

There are two types of execution context in Javascript

- Global execution context
- Function execution context

### Global Execution Context

Whenever javascript engine receives a script file, it first creates a default execution context known as global execution context (GEC). This is where all JavaScript code that is not inside of a function gets executed. For every JavaScript file there can be only one global execution context

## Function Execution Context

Whenever a function is called, the JavaScript engine creates a different type of execution context within Global Execution Context known as Function Execution Context(FEC). This is to evaluate and execute the code within that function.
Since every fuction gets its own FEC, there can be more than one FEC in the run time of a script

## Creation of Variable Object

The Variable Object is an object like container created within the execution context. It stores variables and function declarations defined within that execution context. In the global execution context the variable are first set to undefined.

Also all the function declaration will be stored and made accessible inside the variable object even before the code starts running.
<br/>

![ed1](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/340ac1b2-5612-48a3-b4a6-9b18e0c418b5)

<br/>
This process of storing the variables and functin declaration in the memory prior to the execution of the code is known a hoising

## The Execution Phase

Right after the creation phase of an execution context come the exection phase. This is the stage where the actual code execution begins

Up untill this point the variable the Variable object contains the variable with the value `undefined`. If the code runs at this point it would throw an error as we cant work with undefined values.

At this stage the JavaScript engine scans the code line by line in the current execution context once more and updates the variable objects with the actual values of the variables. Then the code is parsed by a parser, get transpired to an executable byte code and finally gets executed
<br/>
![2ex](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/e44e0ea2-5375-43c7-bfc9-63cbf27fc2da)

<br/>
<br/>
 
## JavaScript Execution Stack
The execution stack keeps track of all the execution context created during the cycle of a script.
JavaScript is a single threaded language which means that it is capable of executing a single task at a time. Thus when other actions, functions and events occur an execution context is created for each of these events.
Due to the single threaded nature of javaScript a stack of piled-up execution context that have to be executed is created known as the execution stack.

When script load in the browser, the global context is created as the default context where the JavaScript engine start executing code and placed at the bottom of the execution stack

The JavaScript engine then search of function calls in the code. For each function call a new Functional Execution Context is created and is placed on the top of the currently executing Execution Context
<br/>
<br/>

![ec3](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/f093663a-f1a3-43bc-9aee-e09dbf132dc3)

<br/>
<br/>

The execution context at the top of the execution stack becomes the active execution context and will always get exectuted first by the JavaScript engine. As soon as the exection of all the codes within the active execution context is done, JavaScript engine pops out that particular functions execution context from the stack and moves towards the next below it and so on
