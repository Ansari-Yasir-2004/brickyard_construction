import React from "react";
import Slider from "react-slick";

function PauseOnHover({
  dots,
  infinite,
  slidesToShow,
  slidesToScroll,
  autoplay,
  autoplaySpeed,
  arrows,
  children,
}) {
  let settings = {
    dots: dots,
    infinite: infinite,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    arrows: arrows,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default PauseOnHover;
