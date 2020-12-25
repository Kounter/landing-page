import React from 'react';

import MainDoctorsSVG from 'assets/doctors_main.svg';
import BlueLineSVG from 'assets/blue_line.svg';

const MainLanding = (props) => {
  return (
    <div
      id="main-landing"
      className="py-20 
      lg:pt-12 lg:pb-40 
      xxxl:pt-32 xxxl:pb-56
      4xl:pt-48 4xl:pb-64 
      5xl:pt-56 5xl:pb-72 
      6xl:pt-72 6xl:pb-96
      px-4 sm:px-10 lg:px-20 xxl:px-40"
    >
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
            <div className="text-left text-lg lg:text-4xl xxxl:text-6xl  ">
              Create Your Virtual Clinic on the Internet
            </div>
            <div className="mt-10 text-sm lg:text-lg xxxl:text-xl text-left">
              10fold makes it easy for healthcare professionals to start their
              virtual clinics. You can build your digital presence, and you
              clients can make appointments with you hassle free.
            </div>
            <div className="mt-10 text-md xl:text-lg xxxl:text-xl 5xl:text-2xl text-left">
              <a
                href="https://app.10fold.in/"
                target="_blank"
                className="px-6 py-4 rounded-full bg-core-blue text-white font-bold shadow-md"
              >
                Sign up
              </a>
              <a
                href="https://shubham.10fold.in/appointment/27"
                target="_blank"
                className="ml-4 px-6 py-4 rounded-full bg-white text-black border-black border-2 font-bold shadow-md"
              >
                I'd like a Demo
              </a>
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
