import React from "react";
import { Container } from "react-bootstrap";
import ContentHeading from "../components/ContentHeading";
import ContentTitle from "../components/ContentTitle";
import { ourProject } from "../data";
import icon from "../assets/images/svg/service-icon.svg";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const Projects = () => {
  return (
    <div>
      <section className="section">
        <Container>
          <div className="mb-5">
            <ContentHeading heading={"Projects"} />
            <ContentTitle>Proudly Presenting Our Finest Projects</ContentTitle>
          </div>
          <div className="row">
            {ourProject.map((project) => (
              <div key={project.id} className="col-md-6 col-sm-6 mb-4">
                <div className="cursor-pointer">
                  <div className="project-section overflow-hidden">
                    <img
                      className="project-img img-fluid"
                      src={project.image}
                      alt="project"
                    />
                  </div>
                  <a
                    href="/"
                    className="bg-cultured text-deep-moss-green fw-500 fs-14 rounded-1 p-2 mt-4 d-inline-block"
                  >
                    {project.linktext}
                  </a>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                    <h5 className="h4 m-0 text-phthalo-green fw-600">
                      {project.title}
                    </h5>
                    <img src={icon} alt="icon" width="24px" />
                  </div>
                  <div className="border-silver-chalice border-top-0"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <OurTeam />
      <Testimonials />
      <Consultation />
    </div>
  );
};

export default Projects;
