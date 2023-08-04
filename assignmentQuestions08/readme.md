# Assignment Questions 8

## Q.1 Whats React and its pros and cons?

React is an open-source, frontend, JavaScript library created by facebook for building complex, interactive UI components in web and mobile applications

### Pros

- Easy to learn
- React uses virtual DOM
- There are reusable components
- Operates on one way data flow => react binds all the data to a downward motion. In this structure parent data cannot be affected by the change in child elements. This creates more stable code
- SEO friendliness => Search Engine Optimization.SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for

### cons

- JSX syntax
- Fast Development pace
- somewhat slow documentation

## Q.2 What do you understand by Virtual Dom?

- virtual DOM is the virtual representation of the actual DOM. It is exactly same as the original DOM but does not have the power to directly change the layout of the original document.
- When anything new is added to the application, a virtual DOM is created and it is represented as a tree
- Each elements in the application is a node in this tree
- This new virtual DOM tree is then compared with the previous virtual DOM tree and make a note of the changes
- It finds the best possible way to make the changes in the real DOM
- Now only the updated elements will be get rendered on the page again

## Q.3 Difference between Virtual Dom vs Real Dom

### RealDOM

- DOM represents the web page often called a document with a logical tree and each element in the application is a node in the tree and each node contains objects
- Programmers can modify the content of the document using scripting language like JavaScript
- The changes and updates to the DOM are fast because of it's tree like structure but after changes the updated element and it's children have to be re-rendered to update the application UI
- So the re-rendering of the UI which the DOM slow
- all the UI components need to be rendered for every DOM update, not only those item that receives the update

### virtual DOM

- VDOM is the virtual representation of the real DOM
- React updates the state changes in the virtual DOM first and then it syncs with the real DOM
- VDOM is a programming concept where a virtual represntation of a UI is kept in memory synced with 'RealDOM' by a library such as ReactDOM and this process is called reconciliation
- VDOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information- rather than wasting time on updating the entire page, you can dessect it into small elements and interactions

Q.4 Whats component? Types of component

- Components are independent and reusable bits of code. The server the same purpose as javascript functions but works in isolation and return HTML.
- Components come in two types Class components and function components

## Q.5 Difference between class & function based component

| functional components                                                                                                                      | class components                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A functional compomponent is a plain javascript function that accepts props as an argument and retursn a react element                     | A class component requires you to extend from react. Component and create a render function that returns a React element                                |
| There is no render method used in functional components                                                                                    | It must have a render method(), method returning JSX (which is syntactically similar to html)                                                           |
| Functional component run from top to bottom and once the function is returned it can’t be kept alive.                                      | The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component. |
| Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state.                                                                               |
| React lifecycle methods (for example, componentDidMount) cannot be used in functional components.                                          | React lifecycle methods can be used inside class components (for example, componentDidMount).                                                           |
| Constructors are not used.                                                                                                                 | Constructor is used as it needs to store state.                                                                                                         |

## Q.6 Explain react component life cycle

Life cycle of a react component can be defined as a series of methods that are invoked in different stages of the component's existence. A react component can go through four different stages of its life as follows

- Initialization => This is the stage where the component is constructed with the given props and default state. This is done in the constructor of a component class
- Mounting => It is the stage of rendering JSX returned by the render method itself
- Updating => It is the stage when the component is updated and the application is repainted
- Unmounting => Unmounting is the final step of the component life cycle where the component is removed from the stage

## Q.7 Explain Prop Drilling in React & Ways to avoid it

- Prop Drilling is the situation when the same data is being sent to atmost every level due to requirements in the final level
- This situation can be avoided using Context API
- Context API is a state management solution provided by react which allows us to create context and context provides values like states and functions that can be consumed by a group of components that are wrapped around the around the context.
- React Context allows us to pass data across the components without using the props

## Q.8 Create a Counter Web App using React

[github](https://github.com/Zareel/ReactJS-CounterApp)

![1](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/0688d191-caf3-455a-b011-b60057186fcc)

https://zareel.github.io/ReactJS-CounterApp/

## Q.9 Develop a GitHub User Finder web application using React

![1 (2)](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/4ec3ae7e-2484-4b40-ae4d-769e76433807)

## Q.10 Develop a simple website using React, fetch and display products from the "https://fakestoreapi.com/products" API

![2](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/b7c321fa-d8bd-4afd-b67a-305ee77d4f28)

<br>
<br>

![3](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/1a993281-cbad-4270-bfee-3a2fe29a48cc)

<br>
<br>

![4](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/f3a009f8-02f5-43da-ba0c-fa732e5da69d)

<br>
<br>
![1](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/7bec5326-4c8b-4689-bf5f-3142b578b1c7)
