import React from "react";
import TopMenuBar from "../components/TopMenuBar/TopMenuBar";

function PageNotFound() {
  return (
    <div>
      <TopMenuBar />
      <div className="flex justify-center m-16">
        <div className="flex-col p-32">
          <h1 className="text-center text-7xl">404</h1>
          <p className="text-center">Ups, page not found</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
