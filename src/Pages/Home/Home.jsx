import React from "react";
import FeatureSection from "./FeatureSection/FeatureSection";
import HomePageBanner from "./HomePageBanner";
import HomeText from "./HomeText";
const Home = () => {
  return (
    <div>
      <HomePageBanner />
      <HomeText />
      <FeatureSection />
    </div>
  );
};

export default Home;
