import React from "react";
import Navbar from "../components/NAV";
import Footer from "../components/FOOTER";
import HeroSection from "../components/HERO";
import About from "../components/ABOUT";
import Areas from "../components/AREAS";
import Properties from "../components/PROPERTIES";
import Services from "../components/SERVICES";
import Testimonials from "../components/TESTIMONIALS";
import Contact from "../components/CONTACT";

const HomePage = ({ theme }) => {
  return (
    <>
      <Navbar theme={theme} />
      <HeroSection/>
      <About/>
      <Areas/>
      <Properties/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  );
};

export default HomePage;
