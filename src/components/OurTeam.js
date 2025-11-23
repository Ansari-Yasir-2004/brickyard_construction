import React from "react";
import ContentHeadCapsul from "./ContentHeadCapsul";
import ContentTitle from "./ContentTitle";
import ContentPara from "./ContentPara";
import PauseOnHover from "./PauseOnHover";
import { ourTeam } from "../data";
import { Container } from "react-bootstrap";

const OurTeam = () => {
  return (
   <section  className="bg-cultured section">
     <Container>
      <div className="text-center">
        <ContentHeadCapsul>Our Team</ContentHeadCapsul>
        <ContentTitle>
          Meet Our <span className="text-deep-moss-green">Experienced</span>{" "}
          Experts
        </ContentTitle>
        <ContentPara textColor={"text-nickel"}>
          Our team consists of highly skilled professionals who bring unmatched
          expertise and commitment to every project
        </ContentPara>
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
        {ourTeam.map((member) => (
          <div key={member.id} className="col-sm-12">
            <div
              className="section-member mx-2 bg-white rounded-4 text-center"
              style={{ padding: "4px" }}
            >
              <div className="overflow-hidden">
                <img
                  className="member-image img-fluid"
                  src={member.image}
                  alt="team member"
                />
              </div>
              <h5 className="h4 fw-600 mt-2 text-eerie-black ">
                {member.name}
              </h5>
              <p className="text-cal-poly-pomona-green ">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </PauseOnHover>
    </Container>
   </section>
  );
};

export default OurTeam;
