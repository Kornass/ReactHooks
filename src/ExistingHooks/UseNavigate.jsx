import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseNavigate() {
  // we extract navigate function from useNavigate hook:
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: "John from useNavigate",
    city: "Barcelona",
  });
  return (
    <div className="container">
      <div className="mb-3">
        <h1 className="text-3xl">UseNavigate</h1>
        <p className="textSection">
          The useNavigate hook returns a function that lets you navigate
          programmatically. You can use the function returned by the useNavigate
          hook in two ways.
          <br />
          1. Pass the path you want to navigate as the first argument and an
          optional object as the second argument.
          <br />
          2. Pass the delta you want to go in the history stack. For example,
          navigate(-1) is equivalent to hitting the back button.
        </p>
        <div className="container">
          {/* We navigate user to a specific url in our react router: */}
          <button
            className="button"
            // We pass a piece of our state as params
            onClick={() => navigate(`/params/${person.name}`)}
          >
            Navigate to useParams hook
          </button>
          {/* We navigate user to go back one page in a history stack: */}
          <button
            className="button mt-3"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseNavigate;
