import React, { useEffect, useState } from "react";
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
  const [initialSlideToShow, setInitialSlideToShow] = useState(slidesToShow);
  const [initialSlideToScroll, setInitialSlideToScroll] =
    useState(slidesToScroll);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width < 576) setInitialSlideToShow(1);
      else if (width < 992) setInitialSlideToShow(2);
      else if (width < 1200) setInitialSlideToShow(3);
      else setInitialSlideToShow(slidesToShow);
    };

    const updateSlidesToScroll = () => {
      const width = window.innerWidth;

      if (width < 576) setInitialSlideToScroll(1);
      else if (width < 992) setInitialSlideToScroll(2);
      else if (width < 1200) setInitialSlideToScroll(1);
      else setInitialSlideToScroll(slidesToScroll);
    };

    updateSlidesToShow();
    updateSlidesToScroll();

    window.addEventListener("resize", updateSlidesToShow);
    window.addEventListener("resize", updateSlidesToScroll);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
      window.removeEventListener("resize", updateSlidesToScroll);
    };
  }, [slidesToShow, slidesToScroll]);

  let settings = {
    dots: dots,
    infinite: infinite,
    slidesToShow: initialSlideToShow,
    slidesToScroll: initialSlideToScroll,
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
