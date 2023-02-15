import { Link } from "react-router-dom";

function Packages() {
  return (
    <div className="container">
      <p className="textSection">
        {" "}
        It's also possible to download hooks from NPM software registry. There
        are many React Hooks created that gives you possibility to access
        amazing features in your application. Here we want to share with you
        best articles and packages with hooks:
      </p>
      <ul className="list-disc text-left">
        <li>
          <p>
            <Link
              to="https://www.npmjs.com/package/react-use"
              style={{ color: "blue" }}
            >
              react-use
            </Link>
            - Library of many very useful hooks that let you work more
            effectively with your state, lifecycles, animations, UI side-effects
            or sensors
          </p>
        </li>
        <li>
          <p>
            <Link
              to="https://www.npmjs.com/package/react-responsive"
              style={{ color: "blue" }}
            >
              react-responsive
            </Link>
            - This hook will make creating media queries easier !
          </p>
        </li>
        <li>
          <p>
            <Link
              to="https://www.npmjs.com/package/@react-typed-hooks/use-key-press"
              style={{ color: "blue" }}
            >
              useKeyPress
            </Link>
            - This hook will return true when specified keyboard key is pressed
          </p>
        </li>
        <li>
          <p>
            <Link to="https://react-hook-form.com/" style={{ color: "blue" }}>
              useForm
            </Link>
            - Hook that simplifies working with forms
          </p>
        </li>

        <li>
          <p>
            <Link
              to="https://www.npmjs.com/package/react-use-form-state"
              style={{ color: "blue" }}
            >
              react-use-form-state
            </Link>
            - Another hook that simplifies working with forms
          </p>
        </li>
        <li>
          <p>
            <Link
              to="https://www.npmjs.com/package/use-onclickoutside"
              style={{ color: "blue" }}
            >
              useOnClickOutside
            </Link>
            - React hook for listening for clicks outside of an specific
            element.
          </p>
        </li>
        <li>
          <p>
            <Link
              to="https://medium.com/@Chris1993/15-useful-custom-react-hooks-for-your-next-web-app-c5902d868f4c"
              style={{ color: "blue" }}
            >
              15 useful React hooks
            </Link>
            - This article will go through 15 React Hooks that you can find
            useful while building your application
          </p>
        </li>
        <li>
          <p>
            <Link to="https://usehooks.com/" style={{ color: "blue" }}>
              Use Hooks
            </Link>
            - Huge hooks registry with examples
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Packages;
