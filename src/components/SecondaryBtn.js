import React from "react";
import { Link } from "react-router-dom";

const SecondaryBtn = ({ label, color, path }) => {
  return (
    <Link
      to={path}
      className={`${color} fs-sm-14 fw-500 py-2 nav-btn-2 d-inline-block`}
    >
      {label}{" "}
      <span className="d-inline-block nav-btn-2-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 12.5h16m0 0-6-6m6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};

export default SecondaryBtn;
