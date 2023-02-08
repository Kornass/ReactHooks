// import useContext hook
import { useContext } from "react";
// we import a context created in the parent
import { myContext } from "./UseContext";

function Children3() {
  // Consuming the context. The hook returns the value of the context: value = useContext(Context). The hook also makes sure to re-render the component when the context value changes.
  const dataFromParent = useContext(myContext);
  return (
    <div>
      <p>{dataFromParent.name}</p>
    </div>
  );
}

export default Children3;
