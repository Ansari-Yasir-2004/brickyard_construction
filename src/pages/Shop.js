import React from "react";
import { Container } from "react-bootstrap";
import ContentTitle from "../components/ContentTitle";
import { ourShop } from "../data";
import carticon from "../assets/images/webp/shopping-cart-icon.webp";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const Shop = () => {
  return (
    <section>
      <Container>
        <ContentHeadCapsul>Shop Items</ContentHeadCapsul>
        <ContentTitle>
          Explore Our{" "}
          <span className="text-deep-moss-green ">BrickYard Shop</span>
        </ContentTitle>
        <div className="row">
          {ourShop.map((shop) => (
            <div key={shop.id} className="col-md-4 col-sm-6 mb-4">
              <div className="shop-section ">
                <div className="shop-image">
                  <img className="shop-img w-100" src={shop.image} alt="shop" />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                  <div className="shop-text">
                    <h5 className="m-0">{shop.title}</h5>
                    <a href="/" className="fw-600">
                      {shop.para}
                    </a>
                  </div>
                  <div className="cart-icon rounded-5">
                    <img src={carticon} alt="icon" width="24px" />
                  </div>
                </div>
                <div className="border border-1"></div>
              </div>
            </div>
          ))}
        </div>
        <OurTeam />
        <Testimonials />
        <Consultation />
      </Container>
    </section>
  );
};

export default Shop;
