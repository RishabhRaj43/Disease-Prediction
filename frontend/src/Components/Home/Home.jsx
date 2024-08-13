import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen container pl-0 pr-0">
      <div className="relative">
        <img className="object-cover w-full h-full" src="/home.gif" alt="" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-6">
          <div className="left mb-4">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-accent">Movie</span>{" "}
              Recommendation System
            </h1>
          </div>
          <div className="right">
            <p className="text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              libero dolores nostrum veritatis amet quasi aliquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
