import React from "react";
import "../assets/styles/about.css";
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
              We strive to consistently{" "}
              <span className="text-deep-moss-green">
                exceed client expectations
              </span>{" "}
              with precise planning and superior execution.
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
                <Col md={12} xl={6} className="d-flex">
                  <div className="my-auto">
                    <ContentTitle>
                      Our <span className="text-deep-moss-green">vision</span>
                    </ContentTitle>
                    <ContentPara textColor={"text-dark-charcoal"}>
                      At ASK & ASSOCIATES, our vision is to redefine the way
                      people experience architecture. We aspire to shape a
                      future where buildings are not only functional structures
                      but also lasting testaments to human creativity and
                      innovation. Through our meticulous 3D design process, we
                      breathe life into every blueprint—transforming dreams into
                      reality and aspirations into enduring form.
                    </ContentPara>
                    <ul className="p-0">
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Creating spaces that inspire creativity and innovation
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Designing environments that elevate human experience
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Transforming ideas into purposeful, enduring
                          structures
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Blending design, technology & precision for
                          future-ready architecture
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
                  <div className="my-auto ">
                    <ContentTitle>
                      Our <span className="text-deep-moss-green">mission</span>
                    </ContentTitle>
                    <ContentPara textColor={"text-dark-charcoal"}>
                      At ASK & ASSOCIATES, our mission is to deliver excellence
                      through thoughtful planning, precise execution, and
                      unwavering commitment to quality. We aim to create
                      structures that reflect innovation, reliability, and
                      long-lasting value.
                    </ContentPara>
                    <ul className="p-0">
                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Delivering projects with precision, transparency, and
                          trust
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Ensuring quality craftsmanship in every stage of
                          construction
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Adopting smart, future-ready design and project
                          solutions
                        </span>
                      </li>

                      <li className="mb-3 d-flex align-items-center">
                        <div>
                          <img
                            src={CheckCircleBroken}
                            width="24px"
                            height="24px"
                            alt="check circle broken"
                          />
                        </div>
                        <span className="text-dark-charcoal ms-3 fs-sm-14 our-text">
                          Building spaces that add lasting value to people and
                          communities
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
