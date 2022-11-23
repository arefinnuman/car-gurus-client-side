import React from "react";
import AnimationSection from "./AnimationSection/AnimationSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import HomePageBanner from "./HomePageBanner";
import HomeText from "./HomeText";
const Home = () => {
  return (
    <div>
      <HomePageBanner />
      <HomeText />
      <FeatureSection />
      <AnimationSection />
    </div>
  );
};

export default Home;
