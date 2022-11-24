import React from "react";
import AnimationSection from "./AnimationSection/AnimationSection";
import CertifiedUsedCars from "./CertifiedUsedCars";
import FeatureSection from "./FeatureSection/FeatureSection";
import HomeForm from "./HomeForm";
import HomePageBanner from "./HomePageBanner";
import HomeText from "./HomeText";
import TestimonialSection from "./TestimonialSection";

import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
  return (
    <div>
      <HomePageBanner />
      <HomeText />
      <FeatureSection />
      <AnimationSection />
      <WhyChooseUs />
      <TestimonialSection />
      <CertifiedUsedCars />
      <HomeForm />
    </div>
  );
};

export default Home;
