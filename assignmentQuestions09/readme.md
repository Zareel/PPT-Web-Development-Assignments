# Q.1 What are hooks in react? how to identify hooks?

Ans: Hooks are features introduced in the react 16.8. Hooks allow functional components to use state and it allow us to hook into react features such as state and life cycle methods
Rules for using hooks

- Only functional components can use hooks
- Calling of hooks should always done at the to level of the components
- Hooks should not be inside conditional statement

# Q.2 Explain useState Hook & what can you achieve with it?

Ans: useState() hook allows us to track state in functional component. State generally refers to data or properties that need to be tracked in an application
To use the useState() hook, we first need to import it into our component

```jsx
import { useState } from "react";
```

useState() accepts an initial state and returns two values

- The current state
- A function that accepts the state

```jsx
import { useState } from "react";

const FirstName = () => {
  const [name, setName] = useState("Zareel");

  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  );
};
export default FirstName;
```

# Q.3 How to pass data from one component to another component?

Ans: We can pass data from one component from another component using props. A common way to manage state is by passing props

- Props are arguments passed into react components

```js
// add a brand attribute to a car element
const myElement = <Car brand="Ford" />;

// use brand attribute in the component
const Car = (props) => {
  return (
    <div>
      <h2>It's {props.brand}</h2>
    </div>
  );
};
```

- context API: React provied an in-built feature known as the contex API that helps to pass data from one component to another.
  Context API allows data to pass through a component with out having to pass props mannually at every level. To start using context API in your application you need to follow a few simple steps
- 1. Create a context object

```jsx
import { createContext } from "react";

export const MyContext = createContext("");
```

In the above code we are importing createContext from React and using it to create a new context object named "MyContext". Then we are exporing the context object so that we can use it in the other parts of our application

- 2. Wrap components with a provider
     It is important to note that the provider component should be wrapped around the top level component in an applicaton to ensure that all child components have access to the shared data

```jsx
import { useState } from "react";
import SearchContext from "./components/SearchContext";
import { myContext } from "./context/context";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="w-full h-full bg-black text-white">
      <myContext.Provider value={{ text, setText }}>
        <SearchContext />
      </myContext.Provider>
    </div>
  );
}

export default App;
```

- 3. consume the context
     Now that we have created the provider component, we need to comsume the context in another component to do this we use 'useContext' hook

```jsx
import React from "react";
import { myContext } from "../context/context";
import { useContext } from "react";

const SearchContext = () => {
  const { text, setText } = useContext(myContext);

  return (
    <div>
      <div>
        <h1>{text}</h1>
        <button onClick={() => setText("Hello, world!")}>Click me</button>
      </div>
    </div>
  );
};

export default SearchContext;
```

# Q.4 What is the significance of the "key" prop in React lists, and why is it important to use it correctly?

Ans: In react the `key` prop is used to uniquely identify elements in a list of components. It is important to provide a key prop for each element in a list, because it allows react to optimize rendering by identifying which items have changed and only updating those items rather than re-rendering the entire list. By assigning unique and stable keys to list items we enable react to efficiently track and update components, resulting in improved rendering and subsequent updates

# Q.5 What is the significance of using "setState" instead of modifying state directly in React

Ans: In react we should use setState when you modify some values because it notifies react that your state has been modified that enable react to check if the state has changed from previous render. This triggers a change in the component's state and tells react that the component and its children all need to be re-rendered with the newly updated state. The main reason for using setState is it's asynchronous execution, which boosts performance by avoiding unnecessary rerenders

# Q.5 Explain the concept of react fragments and when you should use them.

Ans: React fragments allow you to wrap or group multiple elements without having to add an extra node to the DOM. This can be useful when rendering multiple child element/ components in a single parent component

# Q.5 How do you handle conditional rendering in React?

Ans: By using

- if - else statement
- switch statement
- element variable
- ternary operators
- using logica &&
- using Immediately invoikng function expressions(IIFEs)
- using enhanced JSX libraries

Q. 10 Build Calculator Web app using React, See below image for reference

[github](https://github.com/Zareel/Calculator-ReactJS)

![1](https://github.com/Zareel/Calculator-ReactJS/assets/110910838/5097d986-6711-461d-bc6f-af98ecf165e4)
