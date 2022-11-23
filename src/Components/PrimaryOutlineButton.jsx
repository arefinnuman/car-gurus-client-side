import React from "react";

const PrimaryOutlineButton = ({ children }) => {
  return (
    <>
      <button className="btn btn-outline btn-primary btn-sm px-4 rounded-2xl">
        {children}
      </button>
    </>
  );
};

export default PrimaryOutlineButton;
