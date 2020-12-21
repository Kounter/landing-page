import React from 'react';

import MainDoctorsSVG from 'assets/doctors_main.svg';
import BlueLineSVG from 'assets/blue_line.svg';

const MainLanding = (props) => {
  return (
    <div id="main-landing" className="py-48 px-4 sm:px-10 lg:px-20 xxl:px-40">
      <div className="flex items-center">
        <div>
          <img src={BlueLineSVG} />
        </div>
        <div className="ml-4 text-core-blue ">
          {' '}
          A one stop solution for Therapists and Doctors
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full flex items-center">
          <div className="w-1/2">
            <div className="text-left" style={{ fontSize: '4rem' }}>
              Create Your Virtual Clinic on the Internet
            </div>
            <div className="mt-10 text-xl text-left">
              10fold makes it easy for healthcare professionals to start their
              virtual clinics. You can build your digital presence, and you
              clients can make appointments with you hassle free.
            </div>
            <div className="mt-10 text-xl text-left">
              <button className="px-6 py-2 rounded-full bg-core-blue text-white font-bold shadow-md">
                Sign up
              </button>
              <button className="ml-4 px-6 py-2 rounded-full bg-white text-black border-black border-2 font-bold shadow-md">
                I'd like a Demo
              </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={MainDoctorsSVG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;
