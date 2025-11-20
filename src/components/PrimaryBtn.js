import React from "react";

const PrimaryBtn = ({ label }) => {
  return (
    <a
      href="/contact"
      className="bg-mint-green text-phthalo-green fw-500 rounded-2 px-4 nav-btn me-auto d-flex align-items-center"
    >
      {label}
    </a>
  );
};

export default PrimaryBtn;
