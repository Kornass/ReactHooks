import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function UseLocation() {
  const location = useLocation();
  // Check the console to see location object extracted from useLocation hook
  console.log(location);
  // We can use location object to execute some function on URL change
  useEffect(() => {
    alert("Location changed");
  }, [location]);

  return (
    <div className="container">
      <div className="mb-3">
        <h1 className="text-3xl">UseLocation</h1>
        <p className="textSection ">
          The useLocation hook is a function that returns the location object
          that contains information about the current URL. Whenever the URL
          changes, a new location object will be returned.
        </p>
        {/* We have an access to current URL (String) */}
        <p>
          URL extracted from location object:
          <br />
          <span className="italic">{`${location.pathname}`}</span>
        </p>
      </div>
    </div>
  );
}

export default UseLocation;
