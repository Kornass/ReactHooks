import { useRef } from "react";
// we pass current state to our hook an an argument
export const usePrevious = (value) => {
  // Creating a reference to a state variable
  const currentRef = useRef(value);
  // Creating an empy reference (we will assign our previous state to this variable)
  const prevRef = useRef();

  // if state variable changed
  if (currentRef.current !== value) {
    // we assign currentRef value to prevRef
    prevRef.current = currentRef.current;
    // we update our currentRef reference to track the state
    currentRef.current = value;
  }
  // We return previous state
  return prevRef.current;
};
