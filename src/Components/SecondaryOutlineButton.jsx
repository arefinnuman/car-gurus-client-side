import React from "react";

const SecondaryOutlineButton = ({ children }) => {
  return (
    <>
      <button className="btn btn-outline btn-secondary btn-sm px-4 rounded-2xl">
        {children}
      </button>
    </>
  );
};

export default SecondaryOutlineButton;
