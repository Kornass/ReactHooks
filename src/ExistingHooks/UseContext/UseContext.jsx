// useContext is a React Hook that lets you read and subscribe to context from your component. React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.
// Context APIs enable us to define the context Object which stores some data and will make it available throughout the hierarchy without passing the data as props.
// Using the context in React requires 3 simple steps: creating the context, providing the context, and consuming the context.

import Children1 from "./Children1";
// Creating a context. createContext(default) creates a context instance
import { createContext, useState } from "react";
export const myContext = createContext("Default Value");

function UseContext() {
  const [data, setData] = useState({
    name: "John",
    city: "Amsterdam",
    age: 39,
  });
  // Providing the context. Provider component available on the context instance is used to provide the context to its child components, no matter how deep they are. To set the value of context use the value prop

  return (
    <myContext.Provider value={data}>
      <div>
        <Children1 />
      </div>
    </myContext.Provider>
  );
  // We are going to consume a context in Children3.jsx component
}

export default UseContext;
