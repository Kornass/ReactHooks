import { useReducer, useEffect, useRef } from "react";
import graph from "../assets/useReducerHook.jpg";

// state object
const initialState = {
  isRunning: false,
  time: 0,
};
// Reducer function that takes current state and action as arguments. Depends on what action we pass in, we destructure existing state and we change parameters inside state object
function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  // we extract current state and dispatch function from useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    // if isRunning is false we stop running timer
    if (!state.isRunning) {
      return;
    }
    // We call dispatch with action 'tick' every second
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    // cleanup function for every tick
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
    // we run this function on change our isRunning state property
  }, [state.isRunning]);

  return (
    <div className="container">
      <div className="mb-3">
        <h1 className="text-3xl">UseReducer</h1>
        <p className="textSection text-sm">
          The useReducer Hook is similar to the useState Hook. It allows for
          custom state logic. If you find yourself keeping track of multiple
          pieces of state that rely on complex logic, useReducer may be useful.
        </p>
        <p className="textSection text-sm">
          The useReducer hook accept 2 arguments{" "}
          <code>
            const [state, dispatch] = useReducer(reducer, initialState)
          </code>
          :<br /> the reducer function and the initial state. The hook then
          returns an array of 2 items: the current state and the dispatch
          function.
          <br />
          * The reducer is a pure function that accepts 2 parameters: the
          current state and an action object. Depending on the action object,
          the reducer function must update the state in an immutable manner, and
          return the new state.
          <br />* The initial state is the value the state is initialized with.
          <br />* The dispatch function is created for you by the useReducer()
          hook. It is a special function that dispatches an action object
          <br />* An action object is an object that describes how to update the
          state.
        </p>
      </div>
      <img src={graph} style={{ width: "50%" }} />
      <div>
        <p className="textSection text-sm">
          As a result of an event handler or after completing a fetch request,
          you call the dispatch function with the action object. Then React
          redirects the action object and the current state value to the reducer
          function. The reducer function uses the action object and performs a
          state update, returning the new state. React then checks whether the
          new state differs from the previous one. If the state has been
          updated, React re-renders the component and useReducer() returns the
          new state value
        </p>
      </div>
      {/* We call dispatch function and pass action object depending on which button we clicked */}
      <div className="stopwatch">
        {state.time}s
        <div>
          <button
            className="button mr-5"
            onClick={() => dispatch({ type: "start" })}
          >
            Start
          </button>
          <button
            className="button mr-5"
            onClick={() => dispatch({ type: "stop" })}
          >
            Stop
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
