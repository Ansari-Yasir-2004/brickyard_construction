import React from "react";
import "../assets/styles/home.css";
import Testimonials from "../components/Testimonials";
import { Col, Container, Row } from "react-bootstrap";
import HeroHomeImg from "../assets/images/webp/hero-home-img.webp";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import AboutUsImg from "../assets/images/webp/about-us-img.webp";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import ContentTitle from "../components/ContentTitle";
import ContentPara from "../components/ContentPara";
import HomeIcon from "../assets/images/webp/home-icon.webp";
import BuildingIcon from "../assets/images/webp/building-icon.webp";
import HomeInteriorIcon from "../assets/images/webp/home-interior-icon.webp";
import { featuredProjects, latestNews, ourServices } from "../data";
import WhyChooseUsImg from "../assets/images/webp/why-choose-us-img.webp";
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
            <Col sm={12} xl={8} lg={7} className="d-flex p-0 mb-4 mb-lg-0">
              <div className="my-auto max-w-md-550 mx-lg-auto">
                <h1 className="display-4 fw-600 text-white mb-3">
                  <span className="text-tea-green">Strong Foundations</span> for
                  Tomorrow's Landmarks
                </h1>
                <p className="text-transparent-white fs-sm-14 mb-4">
                  With a commitment to delivering high-quality solutions, our
                  construction and consultancy services are tailored to meet
                  your needs and exceed expectations.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 justify-content-md-start">
                  <div className="d-flex">

                  <PrimaryBtn label={"Learn More"} />
                  </div>
                  <SecondaryBtn
                    label={"Explore Projects"}
                    color={"text-white"}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} xl={4} lg={5} className="p-0 ms-auto">
              <img src={HeroHomeImg} className="img-fluid" alt="Hero Home" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row className="justify-content-between flex-column-reverse flex-lg-row-reverse  flex-xl-row">
            <Col lg={5}>
              <img src={AboutUsImg} className="img-fluid" alt="About Us" />
            </Col>
            <Col lg={6} className="my-lg-auto mb-4 ">
              <div className="">
                <ContentHeadCapsul>About Us</ContentHeadCapsul>
                <ContentTitle>
                  Shaping the{" "}
                  <span className="text-deep-moss-green">Future</span> with
                  Expertise and Integrity
                </ContentTitle>
                <ContentPara>
                  At BrickYard, our mission goes beyond construction - we
                  believe in creating environments that uplift, inspire, and
                  transform lives.Our approach blends traditional craftsmanship
                  with modern innovation, ensuring durability and elegance in
                  every build.With a passion for quality craftsmanship and a
                  commitment to client satisfaction, we have been proudly
                  serving New York (USA) and surrounding areas for 13-Years of
                  Experties.
                </ContentPara>
                <ul className="p-0">
                  <li className="mb-2 d-flex border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                    <div className="">
                      <img
                        src={HomeIcon}
                        width={"24px"}
                        height={"24px"}
                        alt="Home"
                      />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Residential Construction
                    </span>
                  </li>
                  <li className="mb-2 d-flex border-philippine-gray pb-3 border-start-0 border-top-0 border-end-0">
                    <div className="">
                      <img
                        src={BuildingIcon}
                        width={"24px"}
                        height={"24px"}
                        alt="Building"
                      />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Commercial Construction
                    </span>
                  </li>
                  <li className="mb-2 d-flex pb-3">
                    <div className="">
                      <img
                        src={HomeInteriorIcon}
                        width={"24px"}
                        height={"24px"}
                        alt="Home Interior"
                      />
                    </div>
                    <span className="text-dark-charcoal ms-2 fw-500 fs-5">
                      Interior Design & Finishing
                    </span>
                  </li>
                </ul>
                <PrimaryBtn label={"More About Us"} />
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
                  <span className="text-deep-moss-green">Shaping Spaces</span>{" "}
                  with Expertise, Innovation, and Care
                </ContentTitle>
                <SecondaryBtn
                  label={"Explore Our Service "}
                  color={"text-eerie-black"}
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
                          label={"Learn More"}
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
              <span className="text-deep-moss-green">Elevating Standards</span>{" "}
              in Construction
            </ContentTitle>
          </div>
          <Row className="justify-content-between">
            <Col lg={7} className="my-auto">
              <ul className="p-0 mx-4">
                <li className="mb-4">
                  <Row className="flex-column gap-4 flex-md-row gap-md-0">
                    <div className="why-choose-us-icon">
                      <img
                        src={WhyChooseUsIcon1}
                        alt="Accurate Measurements"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={6} lg={10} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Accurate Measurements
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Lorem ipsum dolor sit amet consectetur. Dictum rhoncus
                      </p>
                    </Col>
                  </Row>
                </li>
                <li className="mb-0 mb-md-4 ">
                  <Row className="justify-content-start justify-content-md-center gap-4 gap-md-0">
                    <div className="why-choose-us-icon">
                      <img
                        src={WhyChooseUsIcon2}
                        alt="Beat Sustainability"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={6} lg={10} xl={6} className="me-5 me-lg-0">
                      <h5 className="h4 fw-600 text-eerie-black">
                        Beat Sustainability
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Lorem ipsum dolor sit amet consectetur. Dictum rhoncus
                      </p>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                </li>
                <li className="mb-4">
                  <Row className="justify-content-start justify-content-md-center gap-4 gap-md-0">
                    <Col xs={1} className="d-lg-none d-none"></Col>
                    <div className="why-choose-us-icon ms-md-4 ms-lg-0">
                      <img
                        src={WhyChooseUsIcon3}
                        alt="Residential Structures"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={6} lg={10} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Residential Structures
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Lorem ipsum dolor sit amet consectetur. Dictum rhoncus
                      </p>
                    </Col>
                  </Row>
                </li>
                <li className="mb-4 ">
                  <Row className="flex-column justify-content-start justify-content-md-end gap-4 flex-md-row gap-md-0">
                    <div className="why-choose-us-icon">
                      <img
                        src={WhyChooseUsIcon4}
                        alt="Tackle Environment"
                        className="img-fluid"
                      />
                    </div>
                    <Col sm={6} lg={10} xl={6}>
                      <h5 className="h4 fw-600 text-eerie-black">
                        Tackle Environment
                      </h5>
                      <p className="mb-0 text-dark-charcoal">
                        Lorem ipsum dolor sit amet consectetur. Dictum rhoncus
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
                  Completed Projects
                </h6>
              </div>
              <p className="mb-0 text-cultured">
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div className="border-honeydew border-start-0 border-top-0 border-end-0 mb-4">
                <h3 className="display-4 text-menthol fw-600">10k+</h3>
                <h6 className="h5 text-honeydew fw-600 mb-4">CHappy Clients</h6>
              </div>
              <p className="mb-0 text-cultured">
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
              </p>
            </Col>
            <Col md={4}>
              <div className="border-honeydew border-start-0 border-top-0 border-end-0 mb-4">
                <h3 className="display-4 text-menthol fw-600">24+</h3>
                <h6 className="h5 text-honeydew fw-600 mb-4">
                  On-Going Projects
                </h6>
              </div>
              <p className="mb-0 text-cultured">
                Lorem ipsum dolor sit amet consectetur. Mattis orci purus
                egestas dis enim non feugiat bibendum tristique.
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
            <div className="d-flex justify-content-between  flex-column flex-lg-row">
              <ContentTitle >
                Proudly Presenting Our{" "}
                <span className="text-deep-moss-green">Finest Projects</span>
              </ContentTitle>
              <SecondaryBtn
                label={"Explore Projects"}
                color={"text-eerie-black"}
              />
            </div>
          </div>
          <Row className="mt-5 align-items-md-center justify-content-md-center">
            {featuredProjects &&
              featuredProjects.map((project) => (
                <Col className="mb-4" key={project.id} md={6} lg={4}>
                  <div className="project-section cursor-pointer">
                    <div className="overflow-hidden">
                      <img
                        className="project-img img-fluid"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                    <a
                      href="/"
                      className="bg-cultured text-deep-moss-green fw-500 fs-14 rounded-1 p-2 mt-4 d-inline-block"
                    >
                      {project.linktext}
                    </a>
                    <div className="d-flex justify-content-between align-items-center align-items-lg-end mt-2 mb-3">
                      <h5 className="h4  m-0 text-phthalo-green fw-600">
                        {project.title}
                      </h5>
                      <img src={icon} alt="icon" width="24px" />
                    </div>
                    <div className="border-silver-chalice border-top-0"></div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="max-w-500 mx-auto text-center mb-5">
            <ContentHeadCapsul>Latest News</ContentHeadCapsul>
            <ContentTitle>Stay Informed with Our Latest Blogs</ContentTitle>
            <ContentPara textColor={"text-dark-charcoal"}>
              Discover Construction Trends: Uncover Insights and Innovations in
              Our Latest Blog.
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
                      November 24 ,2024
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
