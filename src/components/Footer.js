import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CompanyLogo from "../assets/images/png/ask-and-associates-logo-2.png";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/images/webp/location-icon.webp";
import EmailIcon from "../assets/images/webp/email-icon.webp";
import CallIcon from "../assets/images/webp/call-icon.webp";

const Footer = () => {
  return (
    <footer className="my-3">
      <Container className="p-md-0">
        <div className="bg-phthalo-green p-4 p-md-5 rounded-4">
          <Row className="border-honeydew pb-4 pb-lg-5 border-start-0 border-top-0 border-end-0 mb-3 justify-content-start justify-content-md-around">
            <Col sm={12} md={5} lg={3} className="mb-3 mb-lg-0">
              <a href="/" className="mb-3 d-inline-block">
                <img
                  src={CompanyLogo}
                  alt="Company Logo"
                  className="company-logo"
                />
              </a>
              <p className="fs-14 text-honeydew">
                Building a sustainable future with quality craftsmanship and
                innovative construction solutions.
              </p>
              <Form>
                <Row className="mb-3">
                  <Col sm={7} className="px-1">
                    <Form.Group
                      controlId="formGridEmail"
                      className="mb-2 mb-md-0"
                    >
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Col>
                  <Col sm={5} className="d-flex px-1">
                    <PrimaryBtn label={"Submit"} />
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col sm={12} md={3} lg={2} className="mb-3 mb-lg-0 ps-lg-4">
              <p className="text-menthol fw-600 mb-3 text-uppercase">
                QUICK LINKS
              </p>
              <ul className="p-0">
                <li className="mb-2">
                  <Link to={"/about"} className="text-honeydew">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"/service"} className="text-honeydew">
                    Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"/projects"} className="text-honeydew">
                    Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"/blog"} className="text-honeydew">
                    Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={3} lg={2} className="mb-3 mb-lg  -0">
              <p className="text-menthol fw-600 mb-3 text-uppercase">
                Utility Pages
              </p>
              <ul className="p-0">
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Style Guide
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Changelog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Licenses
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    404 Page
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={3} lg={2} className="mb-3 mb-md-0">
              <p className="text-menthol fw-600 mb-3 text-uppercase">
                FOLLOW US
              </p>
              <ul className="p-0">
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Facebook
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Linkedin
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Instagram
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to={"#"} className="text-honeydew">
                    Twitter
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={5} lg={3}>
              <p className="text-menthol fw-600 mb-3 text-uppercase">
                CONTACT US
              </p>
              <ul className="p-0">
                <li className="mb-2 d-flex">
                  <div className="">
                    <img
                      src={LocationIcon}
                      width={"20px"}
                      height={"20px"}
                      alt="Location"
                    />
                  </div>
                  <span className="text-honeydew ms-2">
                    Shop no.19, Stone flower Building,opp.KMES School, Bhiwandi,
                    Thane, Pin :-421302
                  </span>
                </li>
                <li className="mb-2 d-flex">
                  <div className="">
                    <img
                      src={EmailIcon}
                      width={"20px"}
                      height={"20px"}
                      alt="Location"
                    />
                  </div>
                  <span className="text-honeydew ms-2">
                    askandassociates2017@gmail.com
                  </span>
                </li>
                <li className="mb-2 d-flex">
                  <div className="">
                    <img
                      src={CallIcon}
                      width={"20px"}
                      height={"20px"}
                      alt="Location"
                    />
                  </div>
                  <span className="text-honeydew ms-2">+91-7021222937</span>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-tea-green fw-500 m-0">All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
