import { useRef } from "react";

function UseRef01() {
  // creating a reference:
  const inputRef = useRef();
  const paraRef = useRef();
  const para1Ref = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // useRef is always going to return you an object with one property called 'current'. In the current object you have an access to actual DOM element
    console.log(inputRef.current); // jsx element with ref attribute
    console.log(inputRef.current.value); // value that this element holds
    // We are changing text in second paragraph to the current input value:
    para1Ref.current.innerText = inputRef.current.value;
    // We can manipulate a value here. After submitting  we change an inut value to hello :
    inputRef.current.value = "Hello";
    // and change the style of element:
    inputRef.current.style.backgroundColor = "red";
    // when we submit we want to change a text of first paragraph, we change it to goodbye:
    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div className="container flex flex-col justify-center items-center w-2/3">
      <div className="mb-3">
        <h1 className="text-3xl">UseRef</h1>
        <p className="bg-orange-100 border rounded p-2">
          The useRef Hook is a function that returns a mutable ref object whose
          .current property is initialized with the passed argument
          (initialValue). The returned object will persist for the full lifetime
          of the component.
        </p>
        <p className="bg-orange-100 border rounded p-2">
          Sometimes we can have a situation that you want to use a element or
          its value without connecting it to any state.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control my-2" />
        <button
          type="submit"
          className="bg-gray-200 hover:bg-purple-200 border border-black rounded px-2 py-1 "
        >
          Submit
        </button>
        <p ref={paraRef}>Hello</p>
        {/* focusing an inpout on click on 2nd paragraph  */}
        <p onClick={() => inputRef.current.focus()} ref={para1Ref}>
          Message
        </p>
      </form>
    </div>
  );
}

export default UseRef01;
