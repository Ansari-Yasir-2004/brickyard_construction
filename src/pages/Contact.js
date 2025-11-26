import React from "react";
import "../assets/styles/contact.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import contactimage from "../assets/images/webp/contact-image.webp";
import loaction1 from "../assets/images/webp/location-icon-1.webp";
import email1 from "../assets/images/webp/email-icon-1.webp";
import call1 from "../assets/images/webp/call-icon-1.webp";
import PrimaryBtn from "../components/PrimaryBtn";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import Testimonials from "../components/Testimonials";

const Contact = () => {
  return (
    <>
      <section className="section">
        <Container>
          <div className="mb-4 mb-md-5">
            <ContentHeading heading={"Contact Us"} />
            <ContentTitle>Have questions or need assistance?</ContentTitle>
          </div>
          <Row >
            <Col md={6} className="mb-4 mb-md-0 d-flex">
              <div className="position-relative my-auto">
                <img className="img-fluid" src={contactimage} alt="contact" />
                <div className="position-absolute w-100 px-3 start-0 end-0 bottom-0">
                  <ul className="bg-white p-3 p-md-4 d-flex flex-column gap-3 gap-md-4 rounded-3 ">
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={loaction1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        123 Peachtree Street NE, Atlanta, GA 30309
                      </p>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={email1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        hello.brickyard@gmail.com
                      </p>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="contact-icon-wrapper bg-cultured  rounded-3 d-flex p-2 ">
                        <img src={call1} alt="location icon" />
                      </span>
                      <p className="m-0 text-eerie-black fw-500 fs-sm-14">
                        +(528) 456-7592
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className=" border-nickel p-3 p-lg-4 rounded-3 h-100">
                <div className="text-center">
                  <h4>Get in touch</h4>
                  <p className="text-nickel">
                    Connect with us through our contact forum for any inquiries,
                    questions.
                  </p>
                </div>
                <Form className="d-flex flex-column">
                  <Row className="gap-3">
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="text"
                        placeholder="Your Name"
                      />
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="email"
                        placeholder="Your Email Address"
                      />
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="number"
                        placeholder="Phone Number"
                      />
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        size="lg"
                        type="email"
                        placeholder="Subject"
                      />
                    </Col>
                    <Col sm={12}>
                      <Form.Control
                        className="fs-6 p-3"
                        as="textarea"
                        placeholder="Write Message Here......"
                        rows={3}
                      />
                    </Col>
                  </Row>
                  <button className="from-btn mt-4 ms-auto">
                    <PrimaryBtn label={"send Message"} />
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="">
            <ContentHeadCapsul>Google Map</ContentHeadCapsul>
            <ContentTitle>Find Us On Google Map</ContentTitle>
          </div>
          <div className="border-nickel rounded-3">
            <iframe
            title="Map"
              className="section-map d-flex w-100  rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.7305181841334!2d73.04802697503314!3d19.29408178195588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd5deece825b%3A0xb42af685b6b578e7!2sCrisfood!5e0!3m2!1sen!2sin!4v1763983072952!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
      <Testimonials />
    </>
  );
};

export default Contact;
