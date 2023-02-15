import { useState } from "react";
import { usePrevious } from "./usePrevious";
function CustomusePrevious() {
  // we set a state with useState- initially 0
  const [count, setCount] = useState(0);
  // we extract previous count state from usePrevious hook
  const previousCount = usePrevious(count);

  return (
    <div className="container">
      <p className="textSection">
        This hook allows us to have access to previous state value
      </p>
      <p>Count:{count}</p>
      <button
        className="button"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        +
      </button>
      <p>Previous count: {previousCount}</p>
    </div>
  );
}

export default CustomusePrevious;
