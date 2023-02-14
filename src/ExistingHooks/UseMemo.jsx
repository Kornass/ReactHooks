import { useMemo, useState } from "react";

const ExampleUseMemo = () => {
  const [counter1, setCounter1] = useState(0); // Counter 1
  const [counter2, setCounter2] = useState(0); // Counter 2
  // Let's say that we want to calculate expensiveValue for our counter1. Without useMemo computeExpensiveValue() function would run also for changing counter2 (state change triggers component re-rendering). It causes a poor performance of our application. By using useMemo() we can specify, than we want to run this function only on counter1 change. While changing counter2 state, useMemo will memorize the function result.
  // const expensiveValue = computeExpensiveValue(counter1); // Example without useMemo()
  const expensiveValue = useMemo(
    () => computeExpensiveValue(counter1),
    [counter1]
  );
  // expensiveValue from computeExpensiveValue Function With useMemo()

  return (
    <div className="container">
      <h1 className="text-3xl">UseMemo</h1>
      <p className="textSection">
        Memoization- optimization technique that seepds up performance by
        storing or catching the results of an expensive function(take a lot of
        resources) call when the same inputs occur, when it has same arguments
        // UseMemo Hook - It takes a function and an array of dependencies as
        arguments, and returns a Memoized Value which recalculates only when one
        of the dependencies gets changed. If no array is provided, a new value
        will be computed on every render.
      </p>
      <p className="textSection bg-red-100 text-xs">
        Don't worry if page rendering takes some time - there is a expensive
        function running on initial render and every time we change counter1
      </p>
      <div className="mt-3">
        <h2>Counter 1: {counter1}</h2>
        <button
          className="button py-0 "
          onClick={() => setCounter1(counter1 + 1)}
        >
          +
        </button>
      </div>
      <div className="mt-3">
        <h2>Counter 2: {counter2}</h2>
        <button
          className="button py-0 "
          onClick={() => setCounter2(counter2 + 1)}
        >
          +
        </button>
      </div>
      <div className="mt-3">
        <h2>Expensive Value:</h2>
        {expensiveValue}
      </div>
    </div>
  );
};

// Expensive Function
const computeExpensiveValue = (count) => {
  // Display on console whenever the function gets call
  console.log("This function is running...");
  // Time Consuming Calcuation
  for (let i = 0; i < 1000000000; i++) {
    count += 1;
  }
  return count;
};

export default ExampleUseMemo;
