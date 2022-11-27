import React from "react";

const CategoryCard = ({ category }) => {
  const { name, img, details } = category;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="Cars" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl mt-10">{name}</h2>
          <p className="text-center">{details}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-sm btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
