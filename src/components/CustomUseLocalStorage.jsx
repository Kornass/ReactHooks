import useLocalStorage from "../hooks/useLocalStorage"; // whatever into state in localstorage
function CustomUseLocalStorage() {
  const [task, setTask] = useLocalStorage("task", "");
  // Array case
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task: task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="w-50">
        <div className="form-label">Task</div>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  );
}

export default CustomUseLocalStorage;
