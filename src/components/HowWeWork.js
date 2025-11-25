import React from "react";
import ContentHeadCapsul from "./ContentHeadCapsul";
import ContentTitle from "./ContentTitle";
import PauseOnHover from "./PauseOnHover";
import { worker } from "../data";
import { Container } from "react-bootstrap";

const HowWeWork = () => {
  return (
    <section className="section">
      <Container>
        <div className="text-center mb-5">
          <ContentHeadCapsul>How We Work?</ContentHeadCapsul>
          <ContentTitle>
            Built on <span className="text-deep-moss-green">Precision</span>,{" "}
            Driven by <span className="text-deep-moss-green"> Excellence</span>
          </ContentTitle>
        </div>
        <PauseOnHover
          dots={false}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
        >
          {worker.map((work) => (
            <div key={work.id} className="col-sm-12">
              <div className="border-light-silver p-4 mx-2 rounded-4">
                <img className="worker-image" src={work.image} alt="worker" />
                <h5 className="h4 fw-600 mb-3 mt-3 text-eerie-black ">
                  {work.title}
                </h5>
                <p>{work.para}</p>
              </div>
            </div>
          ))}
        </PauseOnHover>
      </Container>
    </section>
  );
};

export default HowWeWork;
