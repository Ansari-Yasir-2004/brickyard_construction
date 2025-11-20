import React from "react";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import ContentTitle from "../components/ContentTitle";
import ContentPara from "../components/ContentPara";

const Home = () => {
  return (
    <div>
      <div className="h1">Home Page</div>
      <ContentHeadCapsul>Testimonials</ContentHeadCapsul>
      <ContentTitle>
        What Our Customers Say{" "}
        <span className="text-deep-moss-green">About Us</span>
      </ContentTitle>
      <ContentTitle>
        Meet Our <span className="text-deep-moss-green">Expreniced</span>{" "}
        Experts
      </ContentTitle>
      <ContentPara>90% Customer Satisfaction based on 750+ reviews and 6,154 Completed Projects.</ContentPara>
    </div>
  );
};

export default Home;
