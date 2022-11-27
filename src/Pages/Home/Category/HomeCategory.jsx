import React from "react";
import luxuryCar from "../../../Assets/Category/luxury Car.jpg";
import sportsCar from "../../../Assets/Category/sportsCar.jpg";
import suv from "../../../Assets/Category/Suv.jpg";
import CategoryCard from "./CategoryCard";

const HomeCategory = () => {
  const categorySection = [
    {
      id: 1,
      name: "Sport Utility Vehicle",
      img: suv,
      details: "SUVs are the most popular type of vehicle in the world.",
    },
    {
      id: 2,
      name: "Sports Car",
      img: sportsCar,
      details: "Sports cars are designed for speed and performance.",
    },
    {
      id: 3,
      name: "Luxury Car",
      img: luxuryCar,
      details: "Luxury cars are designed for comfort and performance.",
    },
  ];

  return (
    <section className="my-14">
      <h1 className="text-4xl text-center">
        We Have lots of variety's Car Collection
        <br />
        <span className="text-bold text-primary"> lets Check this out</span>
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {categorySection.map((category) => (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
