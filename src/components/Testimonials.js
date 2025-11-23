import React from "react";
import ContentHeadCapsul from "./ContentHeadCapsul";
import ContentTitle from "./ContentTitle";
import ContentPara from "./ContentPara";
import PauseOnHover from "../components/PauseOnHover";
import Quote from "../assets/images/webp/quote-img.webp";
import { customerReview } from "../data";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <section className="section">
      <Container>
        <div className="max-w-500 mx-auto text-center mb-5">
          <ContentHeadCapsul>Testimonials</ContentHeadCapsul>
          <ContentTitle>
            What Our Customers Say{" "}
            <span className="text-deep-moss-green">About Us</span>
          </ContentTitle>
          <ContentPara>
            90% Customer Satisfaction based on 750+ reviews and 6,154 Completed
            Projects.
          </ContentPara>
        </div>
        <PauseOnHover
          dots={true}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
        >
          {customerReview.map((review) => (
            <div key={review.id} className="col-sm12">
              <div className="p-3 rounded-4 mx-2 border-light-silver bg-cultured">
                <img
                  src={Quote}
                  width={"32px"}
                  height={"32px"}
                  alt="Quote"
                  className="mb-3"
                />
                <p className="">{review.customerReview}</p>
                <div className="d-flex align-items-center">
                  <img
                    src={review.customerImage}
                    width={"60px"}
                    height={"60px"}
                    alt="Customer"
                  />
                  <div className="ms-2">
                    <h6 className="h5 text-eerie-black fw-600">
                      {review.customerName}
                    </h6>
                    <p className="m-0 fs-14 text-deep-moss-green">
                      {review.customerDesignation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </PauseOnHover>
      </Container>
    </section>
  );
};

export default Testimonials;
