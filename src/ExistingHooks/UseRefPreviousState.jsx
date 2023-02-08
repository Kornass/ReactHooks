import { useState, useEffect, useRef } from "react";
// In this example we don't have an reference to a specific DOM element. We can have also a reference (for example) to a number of renders.
function UseRefPreviousState() {
  const [name, setName] = useState("");

  // In this case, we set 'renders' to 1 cause we take into account a initial render:
  const renders = useRef(1);
  const previous = useRef("");

  // This useEffect will run on 'name' state change (every time when we change a input value).
  useEffect(() => {
    // increasing number of renders (state change triggers component re-render)
    renders.current = renders.current + 1;
    // we change a previous current value to the previous name state
    previous.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Previous state: {previous.current}</h2>
      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseRefPreviousState;
