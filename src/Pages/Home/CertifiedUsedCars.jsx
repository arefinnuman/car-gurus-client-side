import React from "react";
import certificate from "../../Assets/Abstract-Certificate-Landscape.jpg";

const CertifiedUsedCars = () => {
  return (
    <section className="flex justify-evenly ">
      <div className="w-1/2 md:p-16">
        <h1 className="text-5xl font-semibold ">Certified Used Cars</h1>
        <p className="mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          consectetur dolores reiciendis voluptates maiores libero asperiores.
          Culpa deleniti non in? Labore quasi deserunt vitae nemo iusto culpa
          quos, tempore nobis!
        </p>
      </div>
      <div className="w-1/2 md:p-5">
        <img src={certificate} alt="certificate" />
      </div>
    </section>
  );
};

export default CertifiedUsedCars;
