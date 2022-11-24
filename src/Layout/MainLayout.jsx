import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="max-w-[1440px] mx-auto"
      >
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
