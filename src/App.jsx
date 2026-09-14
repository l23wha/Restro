import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Dishes from "./sections/Dishes";
import Feature from "./sections/Feature";
import BookingProcess from "./sections/BookingProcess";
import Timing from "./sections/Timing";
import TestimonialSection from "./sections/TestimonialSection";
import FAQs from "./sections/FAQs";

const App = () => {
  return (
     <>
        <Navbar/> 
        <HeroSection/>
        <About/>
        <Stats/>
        <Dishes/>
        <Feature/>
        <BookingProcess/>
        <Timing/>
        <TestimonialSection/>
        <FAQs/>
     </>
  );
};

export default App;