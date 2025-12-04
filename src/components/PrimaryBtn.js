import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ label, path }) => {
  return (
    <Link
      to={path}
      className="bg-mint-green text-phthalo-green fw-500 rounded-2 px-4 py-2 nav-btn d-inline-block"
    >
      {label}
    </Link>
  );
};

export default PrimaryBtn;
