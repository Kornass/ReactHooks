// import useContext hook
import { useContext } from "react";
// we import a context created in the parent
import { myContext } from "./UseContext";

function Children3() {
  // Consuming the context. The hook returns the value of the context: value = useContext(Context). The hook also makes sure to re-render the component when the context value changes.
  const dataFromParent = useContext(myContext);
  return (
    <div>
      <p>
        <span className="bg-green-100 rounded p-1 mr-2">
          Data received in 3rd child:
        </span>
        {dataFromParent.name}
      </p>
    </div>
  );
}

export default Children3;
