import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

const BuyCarCollection = () => {
  const [carsCollection, setCarsCollection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/buy-cars")
      .then((res) => res.json())
      .then((data) => setCarsCollection(data));
  }, []);
  console.log(carsCollection);
  return (
    <section className="mx-auto md:min-h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5">
      {carsCollection.map((car) => (
        <CarCard key={car._id} car={car}></CarCard>
      ))}
    </section>
  );
};

export default BuyCarCollection;
