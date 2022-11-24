import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary rounded-2xl">{children}</button>
    </div>
  );
};

export default PrimaryButton;
