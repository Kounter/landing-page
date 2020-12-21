import React, { Component } from 'react';
import Slider from 'react-slick';

import Slider1SVG from 'assets/slider_1.svg';
import Slider2SVG from 'assets/slider_2.svg';
import Slider3SVG from 'assets/slider_3.svg';
import Slider4SVG from 'assets/slider_4.svg';
import Slider5SVG from 'assets/slider_5.svg';
import Slider6SVG from 'assets/slider_6.svg';
import Slider7SVG from 'assets/slider_7.svg';
import Slider8SVG from 'assets/slider_8.svg';
import ArrowLeft from 'assets/arrow_left.svg';
import ArrowRight from 'assets/arrow_right.svg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img width="50" height="50" src={ArrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img width="50" height="50" src={ArrowLeft} />
    </div>
  );
}

const SimpleSlider = (props) => {
  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div id="feature-slider" className="m-auto px-10" style={{ width: '95%' }}>
      <Slider {...settings}>
        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider1SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue text-center">
              Control Sessions Anytime
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider2SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Build Your Digital Brand
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider3SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Timely Reminders
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider4SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Zoom or Meet, your choice
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider5SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Session Notes at One Place
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider6SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Manage client data
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider7SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Smart Analytics
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="py-10 w-full h-72">
            <img className="m-auto" src={Slider8SVG} />
          </div>
          <div className="mt-5">
            <span className="text-3xl font-bold text-core-blue">
              Easy rescheduling
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
