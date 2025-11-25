import React from "react";
import "../assets/styles/about.css"
import OurTeam from "../components/OurTeam";
import HowWeWork from "../components/HowWeWork";
import Consultation from "../components/Consultation";
import ContentHeading from "../components/ContentHeading";
import Testimonials from "../components/Testimonials";
import ContentTitle from "../components/ContentTitle";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsImg11 from "../assets/images/webp/about-us-img-1-1.webp";
import AboutUsImg12 from "../assets/images/webp/about-us-img-1-2.webp";
import AboutUsImg21 from "../assets/images/webp/about-us-img-2-1.webp";
import AboutUsImg22 from "../assets/images/webp/about-us-img-2-2.webp";
import ContentPara from "../components/ContentPara";
import CheckCircleBroken from "../assets/images/webp/check-circle-broken.webp";

const About = () => {
  return (
    <div>
      <section className="bg-lotion section">
        <Container>
          <div className="mb-5">
            <ContentHeading heading={"Our Story"} />
            <ContentTitle>
              Our goal is to exceed the{" "}
              <span className="text-deep-moss-green">client expectations</span>{" "}
              through meticulous planning, execution, and quality assurance.
            </ContentTitle>
          </div>
          <Row className="gap-5">
            <Col sm={12}>
              <Row>
                <Col md={12} xl={6}>
                  <Row>
                    <Col md={5}>
                      <img
                        src={AboutUsImg11}
                        alt="About Us"
                        className="img-fluid"
                      />
                      <div className="d-flex flex-column">
                        <h4 className="display-5 text-deep-moss-green fw-600 ms-auto mb-0">
                          SINCE
                        </h4>
                        <h4 className="display-5 text-deep-moss-green fw-600 opacity-50">
                          2011
                        </h4>
                      </div>
                    </Col>
                    <Col md={7}>
                      <img
                        src={AboutUsImg12}
                        alt="About Us"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={12}xl={6} className="d-flex">
                  <div className="my-auto mt-5">
                    <ContentTitle>
                      Our <span className="text-deep-moss-green">Vision</span>
                    </ContentTitle>
                    <ContentPara textColor={"text-dark-charcoal"}>
                      Where we bring visions to life with quality and
                      unflinching dedication. Our mission is to be the leading
                      construction company known for turning innovative ideas
                      into spectacular reality.
                    </ContentPara>
                    <ul className="p-0">
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
                <Col md={12} xl={6} className="d-flex">
                  <div className="my-auto mb-4">
                    <ContentTitle>
                      Our <span className="text-deep-moss-green">Mission</span>
                    </ContentTitle>
                    <ContentPara textColor={"text-dark-charcoal"}>
                      Where we bring visions to life with quality and
                      unflinching dedication. Our mission is to be the leading
                      construction company known for turning innovative ideas
                      into spectacular reality.
                    </ContentPara>
                    <ul className="p-0">
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3  fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="">
                          <img
                            src={CheckCircleBroken}
                            width={"24px"}
                            height={"24px"}
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Promoting eco-friendly development and expansion
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={12} xl={6}>
                  <Row>
                    <Col md={5}>
                      <img
                        src={AboutUsImg21}
                        alt="About Us"
                        className="img-fluid"
                      />
                      <div className="d-flex flex-column">
                        <h4 className="display-5 text-deep-moss-green fw-600 ms-auto mb-0">
                          30k+
                        </h4>
                        <h4 className="display-5 text-deep-moss-green fw-600 opacity-50">
                          Happy Clients
                        </h4>
                      </div>
                    </Col>
                    <Col md={7}>
                      <img
                        src={AboutUsImg22}
                        alt="About Us"
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
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
