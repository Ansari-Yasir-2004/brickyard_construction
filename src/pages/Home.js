import React from "react";
import ContentHeadCapsul from "../components/ContentHeadCapsul";
import PauseOnHover from "../components/PauseOnHover";
import { Container } from "react-bootstrap";
import Quote from "../assets/images/webp/quote-img.webp";
import CustomerImg1 from "../assets/images/webp/customer-img-1.webp";
import Testimonials from "../components/Testimonials";

const customerReview = [
  {
    id: 1,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 2,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 3,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 4,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 5,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 6,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 7,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
  {
    id: 8,
    customerReview:
      "Lorem ipsum dolor sit amet consectetur. Aliquam elementum lobortis nam dui feugiat neque tempor ultricies nunc. Est aliquam tellus eget et orci mi. Posuere id platea donec convallis adipiscing etiam facilisis donec.",
    customerImage: CustomerImg1,
    customerName: "Esther Howard",
    customerDesignation: "Founder, Navana",
  },
];

const Home = () => {
  return (
    <div>
      <Container>
        <div className="h1">Home Page</div>
        <ContentHeadCapsul>Testimonials</ContentHeadCapsul>
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
                  alt="Quote image"
                  className="mb-3"
                />
                <p className="">{review.customerReview}</p>
                <div className="d-flex align-items-center">
                  <img
                    src={review.customerImage}
                    width={"60px"}
                    height={"60px"}
                    alt="Customer Image"
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
      <Testimonials />
    </div>
  );
};

export default Home;
