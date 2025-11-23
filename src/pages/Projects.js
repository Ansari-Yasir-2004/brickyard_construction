import React from "react";
import { Container } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import { ourProject } from "../data";
import icon from "../assets/images/SVG/service-icon.svg";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const Projects = () => {
  return (
    <div>
      <section>
        <Container>
          <ContentHeading heading={"Projects"} />
          <ContentTitle>Proudly Presenting Our Finest Projects</ContentTitle>
          <div className="row">
            {ourProject.map((project) => (
              <div key={project.id} className="col-md-6 col-sm-6 mb-4">
                <div className="project-section ">
                  <div className="project-image">
                    <img
                      className="project-img w-100"
                      src={project.image}
                      alt="project"
                    />
                  </div>
                    <div className="project-text mt-4 d-inline-block">
                      <a href="">{project.linktext}</a>
                    </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                      <h5 className="m-0">{project.title}</h5>
                    <img src={icon} alt="icon" width="24px" />
                  </div>
                  <div className="border border-1"></div>
                </div>
              </div>
            ))}
          </div>
          <OurTeam/>
      <Testimonials/>
      <Consultation/>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
