import React, { useState, useCallback } from "react";

const UseCallback1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  // useCallback will memoize addTodo function, so after calling increment() function (what cause component rerender) it won't define and execute addTodo() function --> Todos component props are not going to change --> Todos component won't be composed and rendered again (it got memoized)
  const addTodo = useCallback(() => {
    setTodos((prevState) => [...prevState, "New Todo"]);
  }, [todos]);

  return (
    <div className="container">
      <h1 className="text-3xl mb-3">UseCallback</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <br />
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
// 'Todos' component re-render even if it not used (in case we click incrementing button)- It's because we change the count state, so it make the whole app.js rerendering. It is happening even if we use memo. It's because something called referential equality ([] === [] --> false). Every time component rerenders our addTodo function is getting recreated. We can prevent it with usecallback
const Todos = React.memo(({ todos, addTodo }) => {
  // This console.log() will run only if we add new Todo in UseCallback1 component
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="button" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
});

export default UseCallback1;
