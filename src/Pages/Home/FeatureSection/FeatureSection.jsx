import React from "react";
import img1 from "../../../Assets/FeaturesSection/Img1.png";
import img2 from "../../../Assets/FeaturesSection/Img2.png";
import img3 from "../../../Assets/FeaturesSection/Img3.png";
import img4 from "../../../Assets/FeaturesSection/Img4.png";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  const featureSection = [
    {
      id: 1,
      name: "Latest Cars",
      icon: img1,
    },
    {
      id: 2,
      name: "Low Odometer",
      icon: img2,
    },
    {
      id: 3,
      name: "Original Engine",
      icon: img3,
    },
    {
      id: 4,
      name: "Certified Tire",
      icon: img4,
    },
  ];
  return (
    <section className="grid mt-8 m-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featureSection.map((feature) => (
        <FeatureCard key={feature.id} feature={feature}>
          {" "}
        </FeatureCard>
      ))}
    </section>
  );
};

export default FeatureSection;
