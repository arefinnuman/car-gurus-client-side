import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import CarCard from "./CarCard";

const BuyCarCollection = () => {
  const [carsCollection, setCarsCollection] = useState([]);
  const [cars, setCars] = useState(null);
  useEffect(() => {
    fetch("https://car-gurus-server-site.vercel.app/buy-cars")
      .then((res) => res.json())
      .then((data) => setCarsCollection(data));
  }, []);
  return (
    <section className="mx-auto md:min-h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5">
      {carsCollection.map((car) => (
        <CarCard key={car._id} car={car} setCars={setCars}></CarCard>
      ))}
      {cars && <BookingModal cars={cars} setCars={setCars}></BookingModal>}
    </section>
  );
};

export default BuyCarCollection;
