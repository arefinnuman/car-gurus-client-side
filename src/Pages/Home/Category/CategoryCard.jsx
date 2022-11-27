import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryDetails }) => {
  const { name, img, details, category } = categoryDetails;
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
            <Link to={`buy-car/${category}`}>
              <button className="btn btn-sm btn-primary">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
