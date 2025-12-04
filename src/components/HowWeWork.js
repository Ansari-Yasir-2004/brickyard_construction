import React from "react";
import ContentHeadCapsul from "./ContentHeadCapsul";
import ContentTitle from "./ContentTitle";
import { worker } from "../data";
import { Col, Container, Row } from "react-bootstrap";

const HowWeWork = () => {
  return (
    <section className="section">
      <Container>
        <div className="text-center mb-5">
          <ContentHeadCapsul>How We Work?</ContentHeadCapsul>
          <ContentTitle>
            Powered by <span className="text-deep-moss-green">Precision </span>
            and{" "}
            <span className="text-deep-moss-green">Expert Craftsmanship</span>
          </ContentTitle>
        </div>
        <Row>
          {worker.map((work) => (
            <Col key={work.id} sm={12} md={6} lg={3} className="mb-4">
              <div className="border-light-silver p-4 rounded-4 h-100">
                <img className="worker-image" src={work.image} alt="worker" />
                <h5 className="h4 fw-600 mb-3 mt-3 text-eerie-black ">
                  {work.title}
                </h5>
                <p className="mb-0">{work.para}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowWeWork;
