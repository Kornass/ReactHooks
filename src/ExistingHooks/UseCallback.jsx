//Example:
// const values = [3, 9, 6, 4, 2, 1]
// const memoizedValue = useMemo(() => values.sort(), [values])
// This will always return the same value, a sorted array. Once the values array changes then this will recompute.
// const memoizedFunction = useCallback(() => values.sort(), [values])
// This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.

import React, { useCallback, useState } from "react";

const UseCallback = () => {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // we memoize setters and put their state as a dependency to calculate this function again
  const memoizedSetCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoizedSetCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <div className="container">
      <h1 className="text-3xl">UseCallback</h1>
      <p className="textSection">
        Memoization recap - When a complex function stores its output so the
        next time it is called with the same input. It’s similar to caching, but
        on a more local level. It can skip any complex computations and return
        the output faster as it’s already calculated. This can have a
        significant effect on memory allocation and performance, and that strain
        is what the useCallback hook is meant to alleviate. // UseCallback pairs
        nicely with another hook called useMemo. The key difference is that
        useMemo returns a memoized value, whereas useCallback returns a memoized
        function. That means that useMemo is used for storing a computed value,
        while useCallback returns a function that you can call later on.
      </p>
      <p>Count one: {countOne}</p>
      <Button handleClick={memoizedSetCountOne} name="button1" />
      <p>Count two: {countTwo} </p>
      <Button handleClick={memoizedSetCountTwo} name="button2" />
      <p className="textSection mb-2">
        Why to use that? When React re-renders your component, it also recreates
        the functions you’ve declared inside your component. When React
        re-renders your component, it will see any functions that are declared
        in your component as being new functions. This is fine most of the time,
        and simple functions are easy to compute and will not impact
        performance. But the other times when you don’t want the function to be
        seen as a new function, you can rely on useCallback to help you out.
      </p>
      <ul className="textSection w-full ">
        Cases for UseCallback:
        <li>
          You’re passing the function to another component that is also memoized
          (useMemo)
        </li>
        <li>Your function has an internal state it needs to remember</li>
        <li>Your function is a dependency of another hook, like useEffect</li>
      </ul>
    </div>
  );
};
// We can mamoize whole components by wrapping them into React.memo(). They will have a props as they dependencies. In this example we will see that only the button that state was changed is going to display console.log() message. Let's say that we click on button 1. It will trigger memoizedSetCountOne() function which will change count one state- It'll trigger our main component rerendering but, button2 console.log() is not going to trigger, because we memoized the function that we pass to memoized component. Without memoizing we would have both buttons rendering on any state change.
const Button = React.memo(({ handleClick, name }) => {
  console.log(`${name} rendered`);

  return (
    <button className="button" onClick={handleClick}>
      {name}
    </button>
  );
});

export default UseCallback;
