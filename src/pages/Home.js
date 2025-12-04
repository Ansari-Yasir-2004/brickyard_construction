import React from "react";
import "../assets/styles/home.css";
import Testimonials from "../components/Testimonials";
import { Col, Container, Row } from "react-bootstrap";
import HeroHomeImg from "../assets/images/jpg/ask-and-associates-home-hero.jpg";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import AboutUsImg from "../assets/images/jpg/ask-and-associates-home-about.jpg";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import ContentTitle from "../components/ContentTitle";
import ContentPara from "../components/ContentPara";
import HomeIcon from "../assets/images/webp/home-icon.webp";
import BuildingIcon from "../assets/images/webp/building-icon.webp";
import HomeInteriorIcon from "../assets/images/webp/home-interior-icon.webp";
import { featuredProjects, latestNews, ourServices } from "../data";
import WhyChooseUsImg from "../assets/images/jpg/ask-and-associates-home-why-choose-us.png";
import WhyChooseUsIcon1 from "../assets/images/webp/why-choose-us-icon-1.webp";
import WhyChooseUsIcon2 from "../assets/images/webp/why-choose-us-icon-2.webp";
import WhyChooseUsIcon3 from "../assets/images/webp/why-choose-us-icon-3.webp";
import WhyChooseUsIcon4 from "../assets/images/webp/why-choose-us-icon-4.webp";
import OurTeam from "../components/OurTeam";
import Consultation from "../components/Consultation";
import icon from "../assets/images/svg/service-icon.svg";

const Home = () => {
  return (
    <div>
      <section className="bg-cal-poly-pomona-green">
        <Container fluid>
          <Row className="px-3 py-5 px-md-4 p-lg-0">
            <Col sm={12} lg={7} className="d-flex p-0 mb-4 mb-lg-0">
              <div className="my-auto max-w-md-550 mx-lg-auto">
                <h1 className="display-4 fw-600 text-white mb-3">
                  <span className="text-tea-green">Designing Spaces</span> that
                  Define the Future
                </h1>
                <p className="text-transparent-white fs-sm-14 mb-4">
                  We blend innovation and expertise to build spaces that
                  inspire, endure, and elevate every experience.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 justify-content-md-start">
                  <div className="d-flex">
                    <PrimaryBtn label={"Discover More"} path={"/service"} />
                  </div>
                  <SecondaryBtn
                    label={"View Projects"}
                    color={"text-white"}
                    path={"/projects"}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} lg={5} className="p-0 ms-auto">
              <img src={HeroHomeImg} className="img-fluid" alt="Hero Home" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row className="justify-content-between flex-column-reverse flex-lg-row-reverse  flex-xl-row">
            <Col lg={5} className="d-flex">
              <img
                src={AboutUsImg}
                className="img-fluid my-auto"
                alt="About Us"
              />
            </Col>
            <Col lg={6} className="my-lg-auto mb-4 ">
              <div className="">
                <ContentHeadCapsul>About Us</ContentHeadCapsul>
                <ContentTitle>
                  Transforming{" "}
                  <span className="text-deep-moss-green">Ideas</span> Into
                  Lasting Spaces
                </ContentTitle>
                <ContentPara>
                  At ASK & ASSOCIATES - 3D Designing, Architecture, and Project
                  Management Consultancy (PMC), we envision, innovate, and
                  deliver architectural excellence that transforms spaces into
                  enduring landmarks. By seamlessly blending creativity,
                  technology, and expertise, we craft design solutions that not
                  only fulfill but consistently surpass client aspirations. Our
                  journey is defined by an unwavering passion for design, a
                  relentless commitment to quality, and a steadfast dedication
                  to turning visions into reality.
                </ContentPara>
                <ul className="p-0">
                  <li className="mb-2 d-flex border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                    <div>
                      <img src={HomeIcon} width="24" height="24" alt="Home" />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Residential Design
                    </span>
                  </li>

                  <li className="mb-2 d-flex border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                    <div>
                      <img
                        src={BuildingIcon}
                        width="24"
                        height="24"
                        alt="Building"
                      />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Commercial Design
                    </span>
                  </li>

                  <li className="mb-2 d-flex pb-3">
                    <div>
                      <img
                        src={HomeInteriorIcon}
                        width="24"
                        height="24"
                        alt="Home Interior"
                      />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Interior Styling
                    </span>
                  </li>
                </ul>
                <PrimaryBtn label={"More About Us"} path={"/about"} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-cultured section">
        <Container>
          <Row className="justify-content-between flex-lg-column flex-xl-row">
            <Col xl={4} lg={8} md={7}>
              <div className="">
                <ContentHeadCapsul>Our Services</ContentHeadCapsul>
                <ContentTitle>
                  <span className="text-deep-moss-green">
                    Transforming Spaces
                  </span>{" "}
                  with Precision & Innovation
                </ContentTitle>
                <SecondaryBtn
                  label={"Explore Services"}
                  color={"text-eerie-black"}
                  path={"/service"}
                />
              </div>
            </Col>
            <Col xl={7} lg={12}>
              <Row>
                {ourServices &&
                  ourServices.map((service) => (
                    <Col key={service.id} md={6}>
                      <div className="bg-white p-4 rounded-4 border-light-silver mb-4">
                        <img
                          src={service.image}
                          width={"52px"}
                          alt={service.title}
                          className="mb-3"
                        />
                        <h4 className="text-eerie-black fw-600 mb-3">
                          {service.title}
                        </h4>
                        <p className="text-eerie-black mb-4">{service.para}</p>
                        <SecondaryBtn
                          label={"Know More"}
                          color={"text-eerie-black"}
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="text-center mb-5">
            <ContentHeadCapsul>Why Choose Us</ContentHeadCapsul>
            <ContentTitle>
              <span className="text-deep-moss-green">Why Choose Us</span> for
              Your Projects
            </ContentTitle>
          </div>
          <Row className="justify-content-between">
            <Col lg={7} className="mb-md-4 my-lg-auto">
              <ul className="p-0 mx-4 mx-lg-0">
                <li className="mb-4 mb-xl-5">
                  <Row className="">
                    <div className="why-choose-us-icon mb-4 mb-md-0">
                      <img
                        src={WhyChooseUsIcon1}
                        alt="Precision Planning"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={12} md={6} lg={8} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Precision Planning
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Accurate measurements that ensure smooth, error-free
                        execution.
                      </p>
                    </Col>
                  </Row>
                </li>

                <li className="mb-4 mb-xl-5">
                  <Row className="justify-content-start justify-content-md-center">
                    <div className="why-choose-us-icon mb-4 mb-md-0">
                      <img
                        src={WhyChooseUsIcon2}
                        alt="Sustainable Practices"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={12} md={6} lg={8} xl={6} className="me-md-5">
                      <h5 className="h4 fw-600 text-eerie-black">
                        Sustainable Practices
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Eco-friendly methods designed to reduce impact and
                        enhance efficiency.
                      </p>
                    </Col>
                    <Col
                      sm={1}
                      className="d-none d-md-block d-lg-none d-xl-block"
                    ></Col>
                  </Row>
                </li>

                <li className="mb-4 mb-xl-5">
                  <Row className="justify-content-start justify-content-md-center">
                    <Col
                      sm={1}
                      className="d-none d-md-block d-lg-none d-xl-block"
                    ></Col>
                    <div className="why-choose-us-icon ms-md-4 mb-4 mb-md-0">
                      <img
                        src={WhyChooseUsIcon3}
                        alt="Reliable Structures"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={12} md={6} lg={8} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Reliable Structures
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Strong and safe designs built to last for generations.
                      </p>
                    </Col>
                  </Row>
                </li>

                <li className="mb-4 mb-xl-5">
                  <Row className="justify-content-start justify-content-md-end">
                    <div className="why-choose-us-icon mb-4 mb-md-0">
                      <img
                        src={WhyChooseUsIcon4}
                        alt="Environmental Care"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={12} md={6} lg={8} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Environmental Care
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Smart solutions crafted to protect and preserve the
                        environment.
                      </p>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
            <Col lg={5}>
              <img
                src={WhyChooseUsImg}
                alt="Why Choose Us"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-cal-poly-pomona-green section">
        <Container>
          <Row className="px-3">
            <Col md={4} className="mb-5">
              <div className="border-honeydew border-start-0 border-top-0 border-end-0 mb-4">
                <h3 className="display-4 text-menthol fw-600">120+</h3>
                <h6 className="h5 text-honeydew fw-600 mb-4">
                  Projects Delivered
                </h6>
              </div>
              <p className="mb-0 text-cultured">
                Successfully delivered projects built with precision, quality,
                and trust.
              </p>
            </Col>

            <Col md={4} className="mb-5">
              <div className="border-honeydew border-start-0 border-top-0 border-end-0 mb-4">
                <h3 className="display-4 text-menthol fw-600">10k+</h3>
                <h6 className="h5 text-honeydew fw-600 mb-4">
                  Satisfied Clients
                </h6>
              </div>
              <p className="mb-0 text-cultured">
                A growing community of clients satisfied with our commitment and
                excellence.
              </p>
            </Col>

            <Col md={4}>
              <div className="border-honeydew border-start-0 border-top-0 border-end-0 mb-4">
                <h3 className="display-4 text-menthol fw-600">24+</h3>
                <h6 className="h5 text-honeydew fw-600 mb-4">
                  Active Projects
                </h6>
              </div>
              <p className="mb-0 text-cultured">
                Actively managed projects progressing with efficiency and
                transparency.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <OurTeam />
      <Testimonials />
      <section className="bg-lotion section">
        <Container>
          <div className="mb-4">
            <ContentHeadCapsul>Featured Projects</ContentHeadCapsul>
            <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
              <ContentTitle>
                Proudly Presenting Our{" "}
                <span className="text-deep-moss-green">Finest Projects</span>
              </ContentTitle>
              <SecondaryBtn
                label={"View Projects"}
                color={"text-eerie-black"}
                path={"/projects"}
              />
            </div>
          </div>
          <Row className="mt-5 justify-content-md-center">
            {featuredProjects &&
              featuredProjects.map((project) => (
                <Col className="mb-4" key={project.id} md={6} lg={4}>
                  <div className="project-section cursor-pointer border-silver-chalice border-top-0 border-start-0 border-end-0">
                    <div className="overflow-hidden d-flex flex-column">
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
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <section className="bg-lotion section">
        <Container>
          <div className="max-w-500 mx-auto text-center mb-5">
            <ContentHeadCapsul>Latest News</ContentHeadCapsul>
            <ContentTitle>
              Explore <span className="text-deep-moss-green">Insights</span>{" "}
              from Our Latest Blogs
            </ContentTitle>
            <ContentPara textColor={"text-dark-charcoal"}>
              Stay updated with industry trends, expert insights, and the latest
              innovations in construction and design.
            </ContentPara>
          </div>
          <Row className="justify-content-md-center">
            {latestNews &&
              latestNews.map((blog) => (
                <Col className="mb-4" key={blog.id} md={6} lg={4}>
                  <div className="cursor-pointer">
                    <div className="blog-section overflow-hidden">
                      <img
                        className="blog-img img-fluid"
                        src={blog.image}
                        alt="blog"
                      />
                    </div>
                    <p className="mb-0 mt-3 text-deep-moss-green">
                      {blog.date}
                    </p>
                    <div className="d-flex justify-content-between align-items-end mt-2 mb-4">
                      <h5 className="h4 mb-0 me-2 text-eerie-black fw-600">
                        {blog.title}
                      </h5>
                      <img src={icon} alt="icon" width="24px" />
                    </div>
                    <div className="border-silver-chalice border-top-0"></div>
                    <p className="text-dark-charcoal mt-3 mb-0">
                      {blog.description}
                    </p>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <Consultation />
    </div>
  );
};

export default Home;
