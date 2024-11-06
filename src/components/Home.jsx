import React from "react";
import About from "./About";
import Header from "./Header";
import Work from "./Work";
import Booking from "./Booking";
import Services from "./Services";
import Testimonial from "./Testimonial";
import News from "./News";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Booking/>
      <Services/>
      <Testimonial/>
      <News/>
    </>
  );
}
