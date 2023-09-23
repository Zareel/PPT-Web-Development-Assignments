## 1. Explain the difference between frontend and backend development?

- `Backend development` refers to the development of the data storage and communication between applications's database and browser
- `Frontend development` refers to the development of visual elements of a website or application that are visible to the user
- `Backend development` is focused on performance, maintenance and scalability
- `Frontend development` is more customer focused
- `Backend developers` work on server-side web application, logic and integration
- `Frontend develpoers` work on implementing visual components on a website

## 2. What is the difference between JavaScript and Node.js?

- `Javascript` is a dynamic and functional programming language that's used for web development, game development and lot more
- `nodeJS` is an open source server environment. It is built on Chrome's V8 javascript engine for executing javascript code outside of a browser. It provides asynchronous, cross platform runtime environment for building server-side applications using Javascript

## 3. What is expressJS?

Express is a small framework that works on top of nodejs webserver functionality to simplify it's API's and add new helpful features

## 4. What is axios?

Axios is a popular library which is mainly used to send asychronous HTTP requests and fetch data

## 5. What is req and res in nodejs?

- As soon as you make a web request on the web, the web starts analysing the request,process it, may be grab some data from the database, finally gets you some response. Some times it gets you some status code

# 19-19-2023

# Tuesday

## 1. What is the difference between asynchronous and synchronous functions?

- Asynchronous function can run in parallel to another functions while Synchronous function can run one at a time
- Asynchronous fuctions are non-blocking, means it can send multiple requests to server. Synchronous functions are blocking, means it has to wait for the response to each request
- Asynchronous function is usually faster and more efficient than synchronous function, but also more complex and error-prone
- Asynchronous function is used for tasks that involve network communication, user input, or timers, while synchronous function is used for tasks that require sequential execution or data consistency.

## 2. What is NodeJS? Explain in detail the working of NodeJS.

- `nodeJS` is an open source server environment. It is built on Chrome's V8 javascript engine for executing javascript code outside of a browser. It provides asynchronous, cross platform runtime environment for building server-side applications using Javascript

---

- working of nodeJS

. you are making some request

. the request gets connected to node js server

. one by one all the requests will go to the event queue

. the requests are checked by the event loop

. the requests that do not have any third-party dependency, will be executed and sent back to the event queue

. the requests that need to be computed will be sent to the thread pool by the event loop

. now it is the task of the thread pool to communicate with the database

. so the requests that have any third-party dependency will be executed by the thread pool

. this continuous process is known as event loop

---

## 3. What is NPM?

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers" etc.

NPM consists of two main parts:

- a CLI (command-line interface) tool for publishing and downloading packages, and
- an online repository that hosts JavaScript packages

---

## 4. Explain CommonJS vs ModuleJS syntax in NodeJS with examples.

- CommonJS and Modules are two different ways of defining and exploring modules in NodeJS.
- The main difference is CommonJS modules are synchronous and dynamic while ES modules are static and asynchronous
- CommonJS is the default in nodeJS and ES modules are standards for JavaScript
- eg: =>

```js
//commonJS
const express = require "express"

// ES module
import express from "express"

```

---

## 5. What is the package.json file?

- The package.json is a file that contains the metadata information. This metadata information can be divided into below categories.

- `Identifying metadata properties`: It basically consist of the properties to identify the module/project such as
- the name of the project,
- current version of the module,
- license, author of the project,
- description about the project etc.

- `Functional metadata properties`: As the name suggests, it consists of the functional values/properties of the project such as
- the entry/starting point of the module,
- dependencies in project,
- scripts being used,
- repository links of Node project etc.

---

# 21-9-2023

# Thursday

## 1. Explain Event Loop in Node.js?

. you are making some request

. the request gets connected to node js server

. one by one all the requests will go to the event queue

. the requests are checked by the event loop

. the requests that do not have any third-party dependency, will be executed and sent back to the event queue

. the requests that need to be computed will be sent to the thread pool by the event loop

. now it is the task of the thread pool to communicate with the database

. so the requests that have any third-party dependency will be executed by the thread pool

. this continuous process is known as event loop

## 2. How do you install, update, and delete a dependency(global, local, and dev)?

`Global Dependencies`: Global installing dependencies puts the module into your Nodejs path, which is Operating System dependent and will be accessible from any project without the need to install it separately for each project while doing the setup.

```JS
npm install -g <package-name>
npm update -g <package-name>
npm uninstall -g <package_name>
```

`Local Dependencies`: Installing the local dependencies means the module will be available only for a project you installed in the same directory.

```js
npm install <package name>
npm updaate <package name>
npm uninstall <package name>
```

`Dev Dependencies`: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the dev Dependencies object.

```js
npm install <package name> --save-dev
npm update <package name> --save-dev
npm uninstall <package name> --save-dev
```

## 3. How do you manage packages in your Node.Js project?

- To create the package.json file, you go to the root directory of the project and execute the following command:

```js
npm init
```

- When you run the npm init command, you will be prompted for information about your project, such as:

. Package name

. Version

. Test command

. Git repository

. Keywords

. Author

. License

- You can use the default values by running :

```js
npm init --y
```

- you can install, update and delete pacakages by running below commands

```js
npm install <package name>
npm updaate <package name>
npm uninstall <package name>
```

## 4. How do you create a simple server in Node.js that returns Hello World?

## 5. What is Express and why use it?

- Express is a small framework that works on top of nodejs webserver functionality to simplify it's API's and add new helpful features

---

# 22-9-2013

# Friday

## 1. How do you create a simple Express.js application?

- npm init
- expresss
- nodemon
- colors

## 2. What is callback hell? How do we overcome it?

Call back hell is a term used to describe situation in which nested callback functions make the code difficult to read and maintain.
to avoid callback hell you can

- use promises or async/await

## 3. What is API (Application Programming Interface) and what is the purpose of an API in a backend application?

API is defined as a code that helps two different software’s to communicate and exchange data with each other.
It is a collection of software functions and procedures.
The purpose of API in backend applications are

- Simplifies integration of third-party services
- Increase the quality of your codebase
- Makes it easier to handle retry logic
- Linkd software and applications to cloud-based storage

## 4. Explain the concept of routing and how it is implemented in backend frameworks.

- Routing is a process of selecting a path for trafic in a network.
- Routing can be implemeted in backend framework using expressJS
- We define the routes by using the methods of “app” object. This app object specifies a callback function called when a request is received.
- EG:

```JS
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello Sir')
})
```

## 5. Explain the concept of middlewares in Node/Express.

Middleware is nothing but software that exists between operating systems and applications. Middleware connects data, users, and applications. That’s why we use middleware to manage data and communication.

### advantages

- Middleware can process 'request objects' multiple times before the server works for that request.
- Middleware can be used to add logging and authentication functionality.
- Middleware improves client-side rendering performance.

---

What are the different types of HTTP requests?
Explain about different HTTP status codes in detail.
Difference between SQL and NoSQL databases.
What is MongoDB and its advantages and disadvantages?
How would you connect a MongoDB database to Node.js?
What is mongoose and why use it?
What is RDBMS? How is it different from DBMS?
What are Constraints in SQL?
What is a Primary Key, Foreign Key and difference between them?
What is a Join? List its different types.
What is an Index? Explain its different types.
What is a Query?
ist the different types of relationships in SQL.
What is Normalization and Denormalization?
What are TRUNCATE, DELETE, and DROP statements and differences between them?
How do you handle error and exception handling in node/express application?
How do you handle input validation and data sanitization in a backend application?
How do you handle cross-origin resource sharing (CORS) in a backend application?
What are the key considerations when designing a RESTful API?
What are the differences between stateless and stateful communication in a backend system?
How do you handle versioning in a backend API?
What is the purpose of rate limiting and the process of implementing rate limiting to prevent abuse or excessive API usage.
What is the role of web sockets in real-time communication in a backend application?
How does caching improve the performance of a backend application?
Describe the process of implementing a caching strategy for a backend application.
How do you handle database transactions in a backend application?
Explain the concept of data sharding and its benefits in scaling a backend database.
What is the role of indexing in a database and how does it impact performance?
Describe the process of authentication and authorization in a backend application.
How do you ensure the security of sensitive data in a backend system?
What are worker threads in NodeJS?
Explain the concept of containerization and its benefits in backend deployment.
How do you ensure high availability and fault tolerance in a backend system?
What is the role of a reverse proxy in backend infrastructure?
Describe the process of scaling a backend application horizontally and vertically.
How do you handle long-running tasks in a backend system?
Explain clustering in NodeJS and how do we achieve it?
Explain the concept of Access Token, Refresh Token.
Explain the concept of serverless computing and its benefits in backend development.
What are the key considerations for securing a backend application against common vulnerabilities?
Explain the concept of event-driven architecture and its use in backend systems.
What are the benefits of using microservices architecture in backend development?
What is the role of a service mesh in microservices architecture?
Describe the role of a load balancer in a distributed backend system.
Explain the concept of message queues and their significance in backend architecture.
Explain the concept of eventual consistency in distributed databases.
What are the best practices for logging and error handling in a backend application?
Describe the process of designing and implementing a task scheduling system.
How do you ensure data integrity and prevent data corruption in a backend system?
