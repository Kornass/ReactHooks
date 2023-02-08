import React, { useState, useCallback } from "react";

import { memo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
// Todos component re-render even if it not used (in case we click incrementing button)- It's because we change the count state, so it make the whole app.js rerendering. It is happening even if we use memo. It's because something called referential equality. Every time component rerenders our addTodo function is getting recreated. We can prevent it with usecallback
const Todos = React.memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

export default App;
