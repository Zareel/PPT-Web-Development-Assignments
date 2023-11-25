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

- `nodeJS` is an open source, cross platform, server side runtime environment for building server-side applications using javascript. It is built on Chrome's V8 javascript engine for executing javascript code outside of a browser.

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

# 22-9-2023

# Saturday

## 1. What are the different types of HTTP requests?

- GET
- PUT
- POST
- DELETE

## 2. Explain about different HTTP status codes in detail.

- HTTP status code indecate whether a specific http request has been successfully completed
- 100 to 199 => informational response
- 200 to 299 => successful response
- 300 to 399 => redirectional messages
- 400 to 499 => client error responses
- 500 to 599 => server error responses

---

- 200 => ok
- 300 => multiple choices
- 301 => moved permenantly
- 302 => found
- 304 => not modified
- 307 => temporary redirect
- 400 => bad request
- 401 => unauthorized
- 403 => forbidden
- 404 => not found
- 410 => gone
- 500 => internal server error
- 501 => not implemented
- 503 => service unavailable
- 550 => permission denied

# 3. What is MongoDB and its advantages and disadvantages?

- MongoDB is the most popular NoSQL database. It is an open-sourse, document-oriented database that is designed to store large scale of data and also allowes you work with that data efficiently
- Advantages

1. flexibility
2. scalability
3. rich query language
4. integration with big data tools
5. strong community and eco-system

- disadvantage

1. limited transaction support
2. no standard SQL- style joins
3. higer storage and memory usage
4. complex standard cluster management
5. less mature ecosystem

## 4. How would you connect a MongoDB database to Node.js?

do it

## 5. What is mongoose and why use it?

- Mongoose module is one of the most powerfull external module of nodeJS. It is a mongoDB ODM(Object Database Modelling) that is used to traslate the code and it's representation from MongoDB to node server

- why it is used

1. MongoDB stores data in a flexible `json like` documents
2. The document model `maps to the objects` in your application code making data easy to work with
3. Collection validation of MongoDB database can be done easily
4. MongoDB is a distributed database at it's core, so `high availability, horizontal scaling` and geaographic distribution are built in and easy to use

---

# 24-9-2023

# Sunday

## 1. What is meant by web development?

Web development is the work involved in developing a website for the internet

## 2. Explain the difference between frontend and backend development?

- `Backend development` refers to the development of the data storage and communication between app's database and browser
- `Frontend development` refers to the development of visual elements of a website or application that are visible to the user
- `Backend development` is focused on performance, maintenance and scalability
- `Frontend development` is more customer focused
- `Backend developers` work on server-side web application, logic and integration
- `Frontend develpoers` work on implementing visual components on a website

## 3. What is internet?

Internet is the global system of interconnected computer network that uses the internet protocol suite(IP) to communicate between networks and devices

## 4. How does the internet work?

- The actual working of internet takes place with the help of clients and servers.
- Here the client is the laptop that is directly connected to the internet and servers are the computers that is connected indirectly to the internet
- Servers are large computers having all the websites stord in it
- These servers are connected to the internet with the help of IP address

## 5. What is IP address?

- IP address stands for Internet Protocol Address.
- Every PC/ local computer is havine IP address
- This IP address is provided by Internet Service Provider (ISP)
- Every laptop and desktop has its own unique IP address for identification

## 6. what is ISP?

ISP stands for Internet Service Provider which is a term used to refer to a company that provides internet access to people who pay the company or subscribe to the company for the same.

## 7. WWW full form?

- World Wide Web

---

# 6-10-2023

# Friday

## 1. What is RDBMS? How is it different from DBMS?

- DMBS => Database Management System is a software that is used to define, create and maintain database and provides controlled access to the data
- RDMBS => Relational Database Management system => It deals with relations as well as various key constains

## 2. What is a Query?

- In standard English, a query means a request for information.
- In computer programming, it refers to the same thing, except the information is retrieved from a database.
- However, writing a query requires a set of pre-defined code to make the database understand the instruction.
- This concept is also known as the query language

?

## 3. How do you handle error and exception handling in node/express application?

- Use the try- catch mechanism to wrap asynchornous code in a try block and specify a catch block for any exeptions thrown
- Employ middleware to handle exeptions
- Create exceptions using the throw keyword inside the application.
- Handle errors with the default error handler provided by Express.
- Create custom error handlers to override the default error handling behavior.

## 4. What do you meant by input validation and data sanitization in a backend application?

- validation checks whether an input complies with specific policies and constrains
- if there is no validation nothing prevents an attacker from exploiting the form by entering unexpected inputs
- To prevent such a bad situation, developers must add a validation step where the data is inspected before proceeding

- Sanitizing consists of removing any unsafe characters from user inputs, and validating will check to see if the data is in the expected format and type.
- Sanitizing modifies the input to ensure it’s in a valid format for display, or before insertion in a database.

## 5. How do you handle input validation and data sanitization in a backend application?

### Data Validation

- input filtering: Input Filtering: We employ strict input filtering to remove any potentially malicious characters or code from user inputs. Input Filtering: We employ strict input filtering to remove any potentially malicious characters or code from user inputs.
- Data Type Checking: We validate the data against expected data types to ensure that the format is correct. For example, if a field expects an email address, we use regular expressions to validate the input against the email pattern.
- Regular Expressions: Regular expressions allow us to define specific patterns for valid data. We use them extensively for validating complex data formats such as phone numbers, URLs, or credit card numbers.
- Server-Side Validation: Even if client-side validation is implemented, it’s essential to have robust server-side validation as well. This ensures that the data received from clients is double-checked before further processing.

### Data Sanitization

- Escaping: Escaping involves modifying user input in a way that renders any special characters harmless. For example, we escape characters like quotes or backslashes to prevent SQL injections or other code injection attacks.
- Encoding: Encoding converts special characters into their respective HTML entities, ensuring that they are displayed properly without causing any unintended behavior. This helps prevent script injection attacks and protects against XSS vulnerabilities
- ***

# 8-11-2023

# Wednessday

### What is the server engine that MongoDB uses by defalut?

and: WiredTiger Storage engine

### What is cross-origin resource sharing (CORS) in a backend application?

Ans: Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain

### What is rest api

Ans:REST stands for Representational State Transfer. It is a client-service architecture that is based on a request/response design. REST APIs are primarily used to access and work with data.

### What are the key considerations when designing a RESTful API?

1. Use JSON as the Format for Sending and Receiving Data
2. Use Status Codes in Error Handling
3. Be Clear with Versioning

### What are the differences between stateless and stateful communication in a backend system?

Ans: Network Protocols for web browser and servers are categorized into two types: Stateless Protocol, and Stateful protocol.

- Stateless communication: Stateless Protocols are the type of network protocols in which Client send request to the server and server response back according to current state
- statefull communication: In Stateful Protocol If client send a request to the server then it expects some kind of response, if it does not get any response then it resend the request

---

# 22-11-23

# Wednessday

### 1. What is API full form? What is Interface?

- API is Application Programming Interface
- Interface is the shared boundary to exchange information

### 2. What is API versioning? Why it is needed?

Ans:

- API versioning is the practice of transparently managing the changes to your API, so consumers know what to expect from it. You are delivering data to public in some fasion and you need to communicate when you change the way that data is delivered
- API versioning is required because it ensures stability and reliability
- With APIs, somethings as simple as changing a property name from `productId` to `productID` can break things for consumers. Versioning is the solution for this

### 3. What is data contract and breaking changes?

- Data Contract => Primary building block of your API. IT is an agreement on the shape and general content of the request-response data
- Breaking Changes => Reveals why versioning is needed. Any change to your API contract that forces the consumer to also make a change is the breaking change

### 4. Give Examples for breaking changes

Ans: Breaking changes primarily fit into the following categories

1. Changing the request- response format (from XML to JSON)
2. Changing property name (from `name` to `productName`)
3. Changing data type of property (from `String` to `Number`)
4. Adding a required fild on the request (a new required header or property in a request body)
5. Removing a property on the response (removing description from a product)

### 5. How do you handle versioning in a backend API?

Ans: Below are the 5 best practices for API versioning

1. Enable backwards compatibility.
2. Refresh API documentation to reflect new versions.
3. Adapt API versioning to business requirements.
4. Put API security considerations at the forefront.
5. Set your API versions up to scale.

---

# 25-11-2023

# Saturday

### 1. What is rate limiting and what is the purpose of it?

Ans:

- Rate limit is the maximum number of calls you want to allow in a particular time interval
- Setting rate limit enables you to manage the network traffic for your APIs and for specific operations within your APIs

### 2. Explain the rate limiting methods for preventing abuse and exessive API usage?

- to prevent abuse : `IP throttling`: This rate-limiting method works by limiting the number of requests a single IP address can send. When the limit is reached, any additional requests from that IP are denied until the limit has been reset. This method is best for protecting against automated bots and malicious actors sending unauthorized requests.

- to prevent exessive API usage: `Token bucket`: This rate-limiting method works by restricting the number of requests a user can make in a given amount of time by assigning each user a “token bucket” of requests they are allowed to send.When a user sends a request, it is deducted from the token bucket and replenished when the period ends. This method is best for protecting against high-volume requests that could otherwise overwhelm the system.

### 3. mention the methods/process of implementing rate limit?

1. token bucket: resisting the number of requests a user can make in a given amount of time by assigning each user a “token bucket” of requests they are allowed to send.
2. Leaky bucket: When a request is sent, it deducts from the bucket, and if too many requests are sent in a given period of time, the bucket will leak, resulting in requests being denied.
3. Fixed window counter: This rate-limiting method works by limiting the number of requests a user can send in a fixed time window (such as a day or hour). When the time window has elapsed, the counter resets, and the user can continue to send requests.
4. sliding window counter: This rate-limiting method works by limiting the number of requests a user can send in a sliding time window (such as a minute). When the time window has elapsed, the counter is reset based on the time passed, and any additional requests are denied.
5. IP throttling: This rate-limiting method works by limiting the number of requests a single IP address can send. When the limit is reached, any additional requests from that IP are denied until the limit has been reset.

---

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
