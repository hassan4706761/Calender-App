import React from "react";
import { Carousel } from "antd";
import "../Styles/Carousel.less";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const CarouselComponent = (props) => {
  const children = props.children;
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Carousel
      arrows={true}
      {...settings}
      autoplay
      infinite={false}
      pauseOnHover={true}
      slidesToShow={3}
      slidesToScroll={1}
      speed={300}
      dots={false}
      draggable
      swipeToSlide
    >
      {children}
    </Carousel>
  );
};
export default CarouselComponent;
