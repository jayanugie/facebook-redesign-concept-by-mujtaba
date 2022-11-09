import React from "react";

function StatusBar() {
  return (
    <div className="flex justify-center mt-7">
      <div className="container mx-auto lg:px-96">
        <div className="flex">
          <input
            placeholder="What's on your mind, Paul?"
            className="border-y-2 border-l-2 border-r-0 border-gray-100 text-sm rounded-l-md w-full p-2.5 text-center focus:text-left focus:outline-none"
          />
          <button className="bg-white rounded-r-md border-y-2 border-r-2 border-gray-100">
            <img src="up-arrow.png" className="h-4 mx-3 hover:rotate-90" alt="button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
