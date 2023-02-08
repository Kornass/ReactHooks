import { useRef } from "react";

// Why to do this? Sometimes we can have a situation that you want to use a element or its value without connecting it to any state.

function UseRef01() {
  // creating a reference:
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // useRef is always going to return you an object with one property called 'current'. In the current object you have an access to actual DOM element
    console.log(inputRef.current); // jsx element with ref attribute
    console.log(inputRef.current.value); // value that this element holds
    // We can manipulate a value here. After submitting  we change an inut value to hello :
    inputRef.current.value = "Hello";
    // and change the style of element:
    inputRef.current.style.backgroundColor = "red";
    // when we submit we want to change a text of paragraph, we change it to goodbye:
    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRef01;
