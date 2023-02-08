// Is not memorizing a value, it memorizes a callback. It return memorized callback functions
import React, { useState, useCallback } from "react";
function UseCallback() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => {
      return [...prevState, "new task"];
    });
  }, [setTasks]);
  return (
    <div>
      {/* //New component */}
      <h3>
        {tasks.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </h3>
      <Button addTask={addTask} />
    </div>
  );
}
// React Memo takes an component as an argument and it's not going to render certain component, when it's props value hasn't changed
const Button = React.memo(({ addTask }) => {
  console.log("Button component rendered");
  return (
    <div>
      <button className="btn btn-primary mt-4" onClick={addTask}>
        Button
      </button>
    </div>
  );
});

export default UseCallback;
