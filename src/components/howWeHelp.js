import React from 'react';
import BlueLineSVG from 'assets/blue_line.svg';
import HowWeHelp_1 from 'assets/howwehelp_1.svg';
import HowWeHelp_2 from 'assets/howwehelp_2.svg';

const HowWeHelp = (props) => {
  return (
    <div id="how-we-help-container" className="py-32 w-full">
      <div className="py-5 flex items-center justify-center w-full">
        <img src={BlueLineSVG} />
      </div>
      <div className="">
        <p className="py-5 text-center text-4xl font-bold">
          Here's how we help ...
        </p>
        <p className="py-5 text-center text-xl text-core-grey">
          You’ll never have to stress about managing your clients again
        </p>
      </div>

      <div className="mt-10 ">
        <div className=" w-full flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 px-5 lg:px-20 xxl:px-40">
            <div
              id="help-info-card-1"
              className=" relative w-full h-128 shadow-lg rounded-lg border-solid border-2 border-gray-300 "
            >
              <div className="without-hover-content">
                <div className="py-10 font-bold text-3xl"> Individuals </div>
                <div className="py-10">
                  <img className="m-auto" src={HowWeHelp_1} />
                </div>
              </div>

              <div className="absolute top-0 with-hover-content w-full h-full rounded-lg border-4 border-core-blue">
                <div className="px-5 font-bold h-full text-lg flex items-center justify-center text-white">
                  Individual Therapists and Doctors can use 10fold to build
                  their digital identity. You can sell your services to your
                  clients anywhere in the world. Automatic reminders make sure
                  that you never worry about your upcoming sessions. Easy
                  reconcilations of payments and client history all at one place
                  helps you grow your business by 5x.
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className=" absolute text-2xl know-more-btn-1 px-6 py-4 rounded-full bg-white text-core-blue hover:bg-core-blue hover:text-white  font-bold shadow-md"
                  style={{ bottom: '-22px' }}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-5 lg:px-20 xxl:px-40">
            <div
              id="help-info-card-2"
              className=" relative w-full  h-128 shadow-lg rounded-lg border-solid border-2 border-gray-300"
            >
              <div className="without-hover-content-2">
                <div className="py-10 font-bold text-3xl"> Clinics </div>
                <div className="py-10">
                  <img className="m-auto" src={HowWeHelp_2} />
                </div>
              </div>

              <div className="absolute top-0 with-hover-content-2 w-full h-full rounded-lg border-4 border-core-blue">
                <div className="px-5 font-bold h-full text-lg flex items-center justify-center text-white">
                  Clinics can leverage 10fold to build their digital identities
                  and optimise their business operations. Your patients can make
                  appointments with your doctors sitting from home. You can
                  manage all your doctors’ calendar and bookings from a single
                  dashboard. Analytics are useful to track business metrics and
                  help to grow your revenue.
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="absolute text-2xl know-more-btn-2 px-6 py-4 rounded-full bg-white text-core-blue hover:bg-core-blue hover:text-white  font-bold shadow-md"
                  style={{ bottom: '-22px' }}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
