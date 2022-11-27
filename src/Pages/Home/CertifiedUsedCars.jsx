import React from "react";
import certificate from "../../Assets/Abstract-Certificate-Landscape.jpg";

const CertifiedUsedCars = () => {
  return (
    <section className="flex flex-col md:flex-row justify-evenly ">
      <div className="md:w-1/2 md:p-16">
        <h1 className="text-5xl font-semibold ">Certified Used Cars</h1>
        <p className="my-10">
          We have tailored our services around what our community needs. Global
          Car Care is an excellent choice for European Vehicles, Diesel Trucks,
          Mercedes Sprinter Vans as well as all Domestic Vehicles. Please also
          check out our customer reviews!
        </p>
      </div>
      <div className="lg:w-1/2 md:p-5">
        <img src={certificate} alt="certificate" />
      </div>
    </section>
  );
};

export default CertifiedUsedCars;
