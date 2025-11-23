import React from "react";
import { Container } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import { ourService } from "../data";
import icon from "../assets/images/svg/service-icon.svg";
import Testimonials from "../components/Testimonials";
import HowWeWork from "../components/HowWeWork";
import Consultation from "../components/Consultation";
import OurTeam from "../components/OurTeam";

const Service = () => {
  return (
    <div className="">
      <section className="bg-cultured section">
        <Container>
          <div className="mb-5">
            <ContentHeading heading={"What We Offer"} />
            <ContentTitle>Our Services</ContentTitle>
          </div>
          <div className="row">
            {ourService.map((service) => (
              <div key={service.id} className="col-md-4 col-sm-6 mb-4">
                <div className="service-section ">
                  <div className="service-image mb-3">
                    <img
                      className="service-img w-100"
                      src={service.image}
                      alt="service"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
                    <h5 className="h4 m-0 text-phthalo-green fw-600">
                      {service.title}
                    </h5>
                    <img src={icon} alt="icon" width="24px" />
                  </div>
                  <div className="border-silver-chalice border-top-0"></div>
                </div>
              </div>
            ))}
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

export default Service;
