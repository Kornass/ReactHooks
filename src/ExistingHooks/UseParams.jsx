import React from "react";
import { useParams } from "react-router-dom";

function UseParams() {
  // We extract params object from useParams hook
  const params = useParams();
  return (
    <div className="container flex flex-col justify-center items-center w-2/3">
      <div className="mb-3">
        <h1 className="text-3xl">UseParams</h1>
        <p className="bg-orange-100 border rounded p-2">
          The useParams hook returns an object of key/value pairs of the dynamic
          params from the current URL that were matched by the
          <code> Route path=""</code>. Child routes inherit all params from
          their parent routes.
        </p>
        <p className="bg-red-100 border rounded p-2 text-xs">
          Try to go to this page from navigation and from useNavigate hook page.
          Check how we pass params in Navbar.js and useNavigate.jsx files. Check
          also, how we specify params in our Router in App.js
        </p>
        {/* We can extract params from params object by accessing it like a normal object. We specify key names in our Router in App.js */}
        <p>
          My params: <br />
          <span className="italic">{params.data}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default UseParams;
