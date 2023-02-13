import React from "react";

function Home() {
  return (
    <div className=" container flex flex-col justify-center items-center ">
      <div className="w-2/3 bg-orange-100 border rounded p-2">
        <h1 className="text-3xl">React hooks examples library</h1>
        <p className="text-xl">Pick the hook to see examples of their usage!</p>
        <p className="italic">
          Check the comments in the code to get a better, more detailed
          explanation !
        </p>
      </div>
    </div>
  );
}

export default Home;
