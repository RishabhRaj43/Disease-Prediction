import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthProvider.jsx";
import Login from "../Login";
import Logout from "../Logout";
import Recommendation from "../Recommendation/Recommendation.jsx";

const Navbar = ({ clicked, setClicked }) => {
  const [sticky, setSticky] = useState(false);
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <Link to="/">
        <button
          className={`btn btn-ghost ${clicked === "home" ? "text-accent" : ""}`}
          onClick={() => setClicked("home")}
        >
          Home
        </button>
      </Link>
      <Link onClick={() => setClicked("recommendation")} to="/recommendation">
        <button
          className={`btn btn-ghost ${
            clicked === "recommendation" ? "text-accent" : ""
          }`}
        >
          Recommendation
        </button>
      </Link>
      <Link onClick={() => setClicked("contact")} to="/contact">
        <button
          className={`btn btn-ghost ${
            clicked === "contact" ? "text-accent" : ""
          }`}
        >
          Contact
        </button>
      </Link>
      <Link onClick={() => setClicked("about")} to="/about">
        <button
          className={`btn btn-ghost ${
            clicked === "about" ? "text-accent" : ""
          }`}
        >
          About
        </button>
      </Link>
    </>
  );

  return (
    <>
      <div
        className={`z-[50] fixed top-0 left-0 right-0 w-full ${
          sticky
            ? "sticky-navbar shadow-lg bg-base-500 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to={"/"}
              className="text-3xl font-bold cursor-pointer mt-1 ml-4"
              onClick={() => setClicked("home")}
            >
              Med<span className="text-accent">Guide</span>
            </Link>
          </div>
          <div className="navbar-end gap-3">
            <div className="flex flex-col">
              <ul className="flex gap-3 px-3">{navItems}</ul>
            </div>

            {authUser ? (
              <Logout />
            ) : (
              <div className="flex mr-5">
                <a
                  className="btn btn-accent text-black px-6"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <div >
                  <Login />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
