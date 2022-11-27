import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BuyCar/BookingModal";
import CategoryCarCard from "./CategoryCarCard";

const CategorySection = () => {
  const category = useLoaderData();
  const [cars, setCars] = useState(null);
  console.log(category);
  return (
    <section className="mx-auto md:min-h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5">
      {category.map((car) => (
        <CategoryCarCard
          key={car._id}
          car={car}
          setCars={setCars}
        ></CategoryCarCard>
      ))}
      {cars && <BookingModal cars={cars} setCars={setCars}></BookingModal>}
    </section>
  );
};

export default CategorySection;
