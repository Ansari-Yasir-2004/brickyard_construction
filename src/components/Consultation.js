import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Manimage from "../assets/images/webp/consulation-img.webp";
import ContentTitle from "./ContentTitle";
import ContentPara from "./ContentPara";
import PrimaryBtn from "./PrimaryBtn";

const Consultation = () => {
  return (
    <section className="section">
      <Container className="">
        <div className="bg-cultured rounded-4 main-container position-relative px-md-3 py-md-5">
          <Row className="align-items-center px-4 py-5 h-100">
            <Col
              sm={12}
              md={8}
              lg={6}
              xl={5}
              className="main-col d-flex position-relative"
            >
              <div className="my-auto">
                <ContentTitle>
                  Contact Us Today for a{" "}
                  <span className="text-deep-moss-green">
                    Free Consultation
                  </span>{" "}
                </ContentTitle>
                <ContentPara textColor={"text-eerie-black"}>
                  At Brickyard, we believe that every construction project is an
                  opportunity to create something exceptional.
                </ContentPara>
                <div className="d-inline-block">
                  <PrimaryBtn label={"Get Free Quote"} />
                </div>
              </div>
            </Col>
            <div className="position-absolute bottom-0 end-0 d-none d-md-flex justify-content-end p-0">
              <img className="man-image" src={Manimage} alt="" />
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Consultation;
