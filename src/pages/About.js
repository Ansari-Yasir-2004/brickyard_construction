import React from "react";
import OurTeam from "../components/OurTeam";
import HowWeWork from "../components/HowWeWork";
import Consultation from "../components/Consultation";
import ContentHeading from "../components/ContentHeading";
import Testimonials from "../components/Testimonials";
import ContentTitle from "../components/ContentTitle";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <section className="bg-lotion section">
        <Container>
          <div className="">
            <ContentHeading heading={"Our Story"} />
            <ContentTitle>
              Our goal is to exceed the{" "}
              <span className="text-deep-moss-green">client expectations</span>{" "}
              through meticulous planning, execution, and quality assurance.
            </ContentTitle>
          </div>
        </Container>
      </section>
      <HowWeWork />
      <OurTeam />
      <Testimonials />
      <Consultation />
    </div>
  );
};

export default About;
