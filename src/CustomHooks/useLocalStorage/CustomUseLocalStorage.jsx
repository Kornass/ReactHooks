import useLocalStorage from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function CustomUseLocalStorage() {
  // We destructure single task (we set it while typing in the input field) and array of tasks (array of submitted tasks)
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  // state for message (when we try to submit empty input)
  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      setMsg("You cannot submit an empty task!");
      setTimeout(() => setMsg(""), 2500);
    } else {
      e.target.reset();
      const taskObj = {
        task: task,
        completed: false,
        date: new Date().toLocaleDateString(),
      };
      setTask("");
      setTasks([...tasks, taskObj]);
    }
  };
  return (
    <div className="container flex flex-col justify-center items-center w-2/3">
      <h1 className="text-3xl">Custom Hook useLocalStorage</h1>
      <p className="bg-orange-100 border rounded p-2">
        In this hook whatever we want to have in the state we will also set in
        the local storage
      </p>
      <p className="bg-red-200 border rounded p-2 text-xs">
        To see what is in your local storage go to 'Application' tab in dev
        tools
      </p>
      <form onSubmit={onSubmit} className="mt-3">
        <div className="form-label">Task</div>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="border  bg-gray-200 rounded px-4 my-2">
          Submit
        </button>
      </form>
      <p className="text-red-500">{msg}</p>
      <hr />
      {tasks.map((task) => (
        <h3 key={uuidv4()}>{task.task}</h3>
      ))}
    </div>
  );
}

export default CustomUseLocalStorage;
