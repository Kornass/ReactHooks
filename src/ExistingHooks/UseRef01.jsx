import { useRef } from "react";

//  Sometimes we can have a situation that you want to use a element or its value without connecting it to any state.

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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
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
