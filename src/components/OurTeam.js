import React from "react";
import ContentHeadCapsul from "./ContentHeadCapsul";
import ContentTitle from "./ContentTitle";
import ContentPara from "./ContentPara";
import PauseOnHover from "./PauseOnHover";
import { ourTeam } from "../data";
import { Container } from "react-bootstrap";

const OurTeam = () => {
  return (
    <section className="bg-cultured section">
      <Container>
        <div className="text-center mb-5">
          <ContentHeadCapsul>Our Team</ContentHeadCapsul>
          <ContentTitle>
            Meet Our <span className="text-deep-moss-green">Experienced</span>{" "}
            Experts
          </ContentTitle>
          <ContentPara textColor={"text-nickel"}>
            Our team consists of highly skilled professionals who bring
            unmatched expertise and commitment to every project
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
              <div className="cursor-pointer section-member mx-2 bg-white rounded-4 text-center">
                <div className="overflow-hidden rounded-4 position-relative">
                  <img
                    className="member-image img-fluid"
                    src={member.image}
                    alt="team member"
                  />
                  <div className="position-absolute top-50 start-100 social-link-wrapper">
                    <ul className="p-0 bg-honeydew p-3 rounded-3">
                      <li className="mb-2">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M14.167 1.667h-2.5A4.166 4.166 0 0 0 7.5 5.834v2.5H5v3.333h2.5v6.667h3.333v-6.667h2.5l.834-3.333h-3.334v-2.5A.834.834 0 0 1 11.667 5h2.5z"
                              stroke="currentColor"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="m14.015 17.307-10.89-14A.5.5 0 0 1 3.52 2.5h2.067a.5.5 0 0 1 .395.193l10.889 14a.5.5 0 0 1-.395.807h-2.067a.5.5 0 0 1-.394-.193ZM16.67 2.5l-13.334 15"
                              stroke="currentColor"
                              stroke-width="1.25"
                              stroke-linecap="round"
                            />
                          </svg>
                        </span>
                      </li>
                      <li className="">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.997 13.334a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667"
                              stroke="currentColor"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.5 13.333V6.667A4.167 4.167 0 0 1 6.667 2.5h6.666A4.167 4.167 0 0 1 17.5 6.667v6.666a4.167 4.167 0 0 1-4.167 4.167H6.667A4.167 4.167 0 0 1 2.5 13.333Z"
                              stroke="currentColor"
                              stroke-width="1.25"
                              stroke-linecap="round"
                            />
                            <path
                              d="m14.586 5.425.008-.009z"
                              fill="currentColor"
                            />
                            <path
                              d="m14.586 5.425.008-.009"
                              stroke="currentColor"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
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
