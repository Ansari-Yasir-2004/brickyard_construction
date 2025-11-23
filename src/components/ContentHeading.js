import React from "react";

const ContentHeading = ({ heading }) => {
  return (
    <div className="heading d-flex align-items-center gap-2 mb-3">
      <div className="sub-title-line"></div>
      <h6 className="text-deep-moss-green fw-600 h4 mb-0"> {heading}</h6>
    </div>
  );
};

export default ContentHeading;
