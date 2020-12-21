import React from 'react';
import FeatureSlider from './featureslider';

const Practice = (props) => {
  return (
    <React.Fragment>
      <div id="practice-section" className="mt-10">
        <div className="py-64">
          <p className="text-5xl font-bold text-center">
            With us, you can grow your practice
          </p>
          <p className="mt-10 text-xl text-gray-800">
            Create your online presence and help patients discover you fast.
            Managing your schedule, your clients and easy tracking of your
            appointments can help you grow your practice.
          </p>
        </div>
      </div>
      <div className="py-32">
        <FeatureSlider />
      </div>
    </React.Fragment>
  );
};

export default Practice;
