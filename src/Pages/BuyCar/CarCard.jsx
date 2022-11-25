import React from "react";

const CarCard = ({ car }) => {
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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="cars" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p className=""> Resale Price ${resalePrice}</p>
            <p className="text-gray-500">Buying Price ${price}</p>
          </div>
          <p className="card-subtitle text-gray-500">
            {description.slice(0, 50)}...
          </p>
          <p className="font-bold">{engineCapacity}</p>
          <p className="text-sm">Using Period: {yearsOfUse}</p>

          <div className="flex justify-between">
            <p className="">Post By : {postedBy}</p>
            <p className="text-gray-500">{postedTime}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">{location}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
