import React from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import Calender from "../Container/Calender";


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

const CarouselComponent = (props) => {

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: responsive,
  };
  return (
    <Carousel
      arrows={props.arrows}
      {...settings}
      autoplay
      infinite={props.infinite}
      pauseOnHover={props.pauseOnHover}
      slidesToShow={props.slidesToShow}
      slidesToScroll={props.slidesToScroll}
      speed={props.speed}
      dots={props.dots}
      draggable
      swipeToSlide
    >
      {props.children}
    </Carousel>
  );
};
CarouselComponent.propTypes = {

  arrows: PropTypes.bool,
  pauseOnHover:PropTypes.bool,
  slidesToShow:PropTypes.number,
  slidesToScroll:PropTypes.number,
  dots:PropTypes.bool,
  speed:PropTypes.number,
  infinite:PropTypes.bool,

};
CarouselComponent.defaultProps = {

  arrows:true,
  pauseOnHover:true,
  slidesToShow:3,
  slidesToScroll:1,
  dots:false,
  speed:300,
  infinite:false
};

export default CarouselComponent;
