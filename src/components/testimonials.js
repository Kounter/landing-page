import React from 'react';
import TestimonialSlider from './testimonialSlider';

const Testimonials = (props) => {
  return (
    <div
      id="testimonials-container"
      className="py-40  sm:px-10 lg:px-20 xxl:px-40"
    >
      <div className="py-10 text-4xl text-left font-bold">
        Our Users Love Us
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
