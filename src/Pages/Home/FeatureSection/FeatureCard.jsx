import React from "react";

const FeatureCard = ({ feature }) => {
  const { name, icon } = feature;
  return (
    <div
      className={
        "card p-6 card-side bg-base-200 text-neutral shadow-xl flex justify-center items-center"
      }
    >
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body mt-2">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default FeatureCard;
