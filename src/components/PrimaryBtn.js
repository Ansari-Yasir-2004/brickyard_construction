import React from "react";

const PrimaryBtn = ({ label }) => {
  return (
    <a
      href="/contact"
      className="bg-mint-green text-phthalo-green fw-500 rounded-2 px-4 py-2 nav-btn d-inline-block"
    >
      {label}
    </a>
  );
};

export default PrimaryBtn;
