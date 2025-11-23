import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Manimage from "../assets/images/webp/consulation-img.webp";
import ContentTitle from "./ContentTitle";
import ContentPara from "./ContentPara";
import PrimaryBtn from "./PrimaryBtn";

const Consultation = () => {
  return (
    <section className="section">
      <Container className="bg-cultured rounded-4">
        <Row className="main-container align-items-center ps-4 pe-1 position-relative">
          <Col className="main-col d-flex flex-column justify-content-center">
            <ContentTitle>
              Contact Us Today for a{" "}
              <span className="text-deep-moss-green">Free Consultation</span>{" "}
            </ContentTitle>
            <ContentPara textColor={"text-eerie-black"}>
              At Brickyard, we believe that every construction project is an
              opportunity to create something exceptional.
            </ContentPara>
            <div className="d-inline-block">
              <PrimaryBtn label={"Get Free Quote"} />
            </div>
          </Col>
          <Col className="">
            <img
              className="man-image position-absolute "
              src={Manimage}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Consultation;
