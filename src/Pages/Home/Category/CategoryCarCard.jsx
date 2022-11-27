import React from "react";

const CategoryCarCard = ({ car, setCars }) => {
  const {
    name,
    price,
    description,
    img,
    resalePrice,
    yearsOfUse,
    postedTime,
    engineCapacity,
    postedBy,
    location,
  } = car;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="cars" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p className="">
              {" "}
              Resale Price <br /> <b>${resalePrice}</b>
            </p>
            <p className="text-gray-500">
              Buying Price <br /> ${price}
            </p>
          </div>
          <p className="card-subtitle text-gray-500">
            {description.slice(0, 50)}...
          </p>
          <p className="font-bold">Engine Capacity: {engineCapacity}</p>
          <p className="text-sm">Using Period: {yearsOfUse}</p>

          <div className="flex justify-between">
            <p className="">Post By: {postedBy}</p>
            <p className="text-gray-500">{postedTime}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">{location}</p>
            <label
              onClick={() => setCars(car)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarCard;
