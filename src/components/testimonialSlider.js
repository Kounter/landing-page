import React, { Component } from 'react';
import Slider from 'react-slick';

import TestimonialIMG from 'assets/testimonial_1.png';
import StarIcon from 'assets/star.svg';
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

const TestimonialSlider = (props) => {
  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      id="testimonials-slider"
      className="m-auto px-10"
      style={{ width: '95%' }}
    >
      <Slider {...settings}>
        <div className="w-full">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={TestimonialIMG}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Helped me save time
              </h1>
              <p class="mb-8 leading-relaxed">
                10fold made my practice looks more credible and professional,
                and there is less client interaction regarding their bookings
                issue.
              </p>
              <div className="mt-6 flex items-center">
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
              </div>
              <p className="mt-4 font-bold">NANDINI BHARDWAJ</p>
              <p className="mt-4 ">RCI Licensed Clinical Psychologist</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={TestimonialIMG}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Loved the product
              </h1>
              <p class="mb-8 leading-relaxed">
                10fold made my practice looks more credible and professional,
                and there is less client interaction regarding their bookings
                issue.
              </p>
              <div className="mt-6 flex items-center">
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
              </div>
              <p className="mt-4 font-bold">NANDINI BHARDWAJ</p>
              <p className="mt-4 ">RCI Licensed Clinical Psychologist</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={TestimonialIMG}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Looks promising
              </h1>
              <p class="mb-8 leading-relaxed">
                10fold made my practice looks more credible and professional,
                and there is less client interaction regarding their bookings
                issue.
              </p>
              <div className="mt-6 flex items-center">
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
                <img src={StarIcon} />
              </div>
              <p className="mt-4 font-bold">NANDINI BHARDWAJ</p>
              <p className="mt-4 ">RCI Licensed Clinical Psychologist</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
