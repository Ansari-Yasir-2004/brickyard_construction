import React from "react";
import { Container } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import { ourService } from "../data";
import icon from "../assets/images/SVG/service-icon.svg";
import Testimonials from "../components/Testimonials";
import HowWeWork from "../components/HowWeWork";
import Consultation from "../components/Consultation";
import OurTeam from "../components/OurTeam";

const Service = () => {
  return (
    <section className="bg-cultured">
      <Container >
        <ContentHeading heading={"What We Offer"} />
        <ContentTitle>Our Services</ContentTitle>
        <div className="row">
          {ourService.map((service) => (
            <div key={service.id} className="col-md-4 col-sm-6 mb-4">
              <div className="service-section ">
                <div className="service-image">

                <img
                  className="service-img w-100"
                  src={service.image}
                  alt="service"
                  />
                  </div>
                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                  <h5 className="m-0">{service.title}</h5>
                  <img src={icon} alt="icon" width="24px" />
                </div>
                <div className="border border-1"></div>
              </div>
            </div>
          ))}
        </div>

        <HowWeWork/>
      <OurTeam/>
      <Testimonials/>
      <Consultation/>
      </Container>
    </section>
  );
};

export default Service;
