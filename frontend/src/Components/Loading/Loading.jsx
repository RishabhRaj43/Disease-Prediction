import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center lg:h-screen mid:h-1/2">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
