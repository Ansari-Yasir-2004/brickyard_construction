import React from "react";
import OurTeam from "../components/OurTeam";
import HowWeWork from "../components/HowWeWork";
import Consultation from "../components/Consultation";
import ContentHeading from "../components/ContentHeading";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <div>
      <ContentHeading heading={"What We Over"} />
      <HowWeWork />
      <OurTeam />
      <Testimonials />
      <Consultation />
    </div>
  );
};

export default About;
