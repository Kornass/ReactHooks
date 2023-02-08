// Memorization- optimization technique that seepds up performance by storing or catching the results of an expensive function(take a lot of resources) call when the same inputs occur, when it has same arguments
import { useState, useEffect, useRef, useMemo } from "react";
function UseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  // We have a number that is not changing and we use expensive function to execute it. We can memorize value from this function
  const sqrt = useMemo(() => {
    getSqrt(number);
    // use memo takes a second argument, an dependency array. We put number here couse our fucntion depends on number
  }, [number]);

  const renders = useRef(1);
  // However we maniupalte the state, firing onClick will cause re-render, so sqrt need to be executed again
  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    renders.current = renders.current + 1;
  });
  return (
    <div>
      <input
        type="number"
        className="form-control w-25"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        The sqrt root of {number} is {sqrt}
      </h2>
      <h3>Renders: {renders.current}</h3>
      <h3>Number: {number}</h3>
      <button className="btn btn-primary" onClick={onClick}>
        ReRender
      </button>
    </div>
  );
}
// This is an expensive function- it takes time to execute it, it's 'heavy'.
function getSqrt(number) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive function called");
  return Math.sqrt(number);
}

export default UseMemo;
