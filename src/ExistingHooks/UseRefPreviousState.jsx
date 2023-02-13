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
    <div className="container flex flex-col justify-between items-center w-2/3">
      <h1 className="text-3xl">UseRef</h1>
      <p className="bg-orange-100 border rounded p-2">
        In this example we create a reference to a number of renders and to
        previous name state (collected in input)
      </p>
      <p>Renders: {renders.current}</p>
      <p className="mt-2">Previous state: {previous.current}</p>
      <input
        type="text"
        className="form-control mt-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseRefPreviousState;
