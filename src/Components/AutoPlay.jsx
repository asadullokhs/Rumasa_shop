import React, { Component } from "react";
import Slider from "react-slick";
import "./AutoPlay.scss";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="autoPlay">
        <Slider className="slider" {...settings}>
          <div className="box">
            <img src="./images/home/1.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/2.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/4.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/2.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/4.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/2.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/4.svg" alt="a" />
          </div>
          <div className="box">
            <img src="./images/home/2.svg" alt="a" />
          </div>
        </Slider>
      </div>
    );
  }
}
