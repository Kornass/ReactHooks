import React from "react";

function UseLocation() {
  return (
    <div className="container flex flex-col justify-center items-center w-2/3">
      <div className="mb-3">
        <h1 className="text-3xl">UseLocation</h1>
        <p className="bg-orange-100 border rounded p-2">
          The useLocation hook is a function that returns the location object
          that contains information about the current URL. Whenever the URL
          changes, a new location object will be returned.
        </p>
      </div>
    </div>
  );
}

export default UseLocation;
