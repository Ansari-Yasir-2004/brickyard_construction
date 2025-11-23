import React from "react";
import ContentHeading from "../components/ContentHeading";
import { Container } from "react-bootstrap";
import ContentTitle from "../components/ContentTitle";
import { ourBlog } from "../data";
import icon from "../assets/images/svg/service-icon.svg";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const Blog = () => {
  return (
    <div className="">
      <section className="section">
        <Container>
          <div className="mb-5">
            <ContentHeading heading={"Latest News"} />
            <ContentTitle>Stay Informed with Our Latest Blogs</ContentTitle>
          </div>
          <div className="row">
            {ourBlog.map((blog) => (
              <div key={blog.id} className="col-md-6 col-sm-6 mb-4">
                <div className="blog-section ">
                  <div className="blog-image">
                    <img
                      className="blog-img w-100"
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
                    Lorem ipsum dolor sit amet consectetur. Non sapien mattis
                    adipiscing aliquam. Adipiscing vitae non sagittis odio
                    faucibus vel sed.
                  </p>
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

export default Blog;
