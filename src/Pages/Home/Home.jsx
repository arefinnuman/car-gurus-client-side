import React from "react";
import AnimationSection from "./AnimationSection/AnimationSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import HomePageBanner from "./HomePageBanner";
import HomeText from "./HomeText";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
  return (
    <div>
      <HomePageBanner />
      <HomeText />
      <FeatureSection />
      <AnimationSection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
