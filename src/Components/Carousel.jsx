import React from "react";
import { Carousel } from "antd";
import "../Styles/Carousel.less";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};
const responsive = [
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
];

const CarouselComponent = ({ children }) => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: responsive,
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
