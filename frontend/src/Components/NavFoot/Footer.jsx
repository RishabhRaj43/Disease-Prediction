import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ setClicked }) => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link
            to={"/about"}
            onClick={() => setClicked("about")}
            className="link link-hover"
          >
            About us
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setClicked("contact")}
            className="link link-hover"
          >
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <Link to={"https://github.com/RishabhRaj43"} target="_blank" >
              <svg
                viewBox="0 0 16 16"
                fillRule="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 0 0-2.546 15.572c.404.074.553-.176.553-.392v-1.528c-2.238.489-2.709-1.079-2.709-1.079-.365-.927-.892-1.174-.892-1.174-.728-.498.056-.488.056-.488.806.056 1.228.83 1.228.83.714 1.215 1.873.86 2.332.658.073-.517.279-.86.507-1.061-1.779-.203-3.648-.888-3.648-3.953 0-.872.312-1.586.826-2.146-.082-.203-.358-1.016.078-2.116 0 0 .67-.215 2.2.82a7.712 7.712 0 0 1 2-.27c.682 0 1.366.092 2 .27 1.527-1.035 2.197-.82 2.197-.82.437 1.1.161 1.913.08 2.116.515.56.826 1.274.826 2.146 0 3.069-1.874 3.747-3.654 3.948.287.249.549.737.549 1.48v2.197c0 .218.148.469.556.391A8 8 0 0 0 8 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
