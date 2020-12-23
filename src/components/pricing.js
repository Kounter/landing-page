import React from 'react';
import RupeeIcon from 'assets/rupee.svg';

const PricingSection = (props) => {
  return (
    <div>
      <div id="pricing-section-container" className="mt-10">
        <div id="pricing-section-1" className="py-20">
          <div className="py-48">
            <p className="text-5xl font-bold text-center">
              An affordable pricing plan tailored for you.
            </p>
            <p className="mt-10 text-xl text-gray-800">
              Free for first 30 days. 100% cashback guaranteed if cancelled
              within 2 weeks of your subscription.
            </p>
          </div>
        </div>
        <div id="pricing-section-2" className="py-20">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/3 px-2 sm:px-5 lg:px-10  xxl:px-24 xxxl:px-32 5xl:px-48">
              <div
                className="relative b-r-50 px-4 py-4 shadow-md border-4 border-gray-300 hover:border-core-blue"
                style={{ height: '40rem' }}
              >
                <div className="text-4xl font-bold py-6 text-center">FREE</div>
                <div className=" flex items-center justify-center">
                  <img src={RupeeIcon} />
                  <span className="ml-2 text-6xl text-core-blue">0</span>
                </div>
                <div className="mt-4 mb-4 text-core-grey ">per month</div>
                <div className="py-8">
                  <div className="py-2 text-core-green text-lg ">
                    Unlimited sessions
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Unlimited clients
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Unlimited subdomain
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    2% commission on every payment
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Upto three services
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href="https://app.10fold.in/"
                    target="_blank"
                    className="absolute bottom-0 px-10 py-4 rounded-full shadow-md text-xl bg-core-blue text-white font-bold"
                    style={{ bottom: '-30px' }}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-2 sm:px-5 lg:px-10  xxl:px-24 xxxl:px-32 5xl:px-48">
              <div
                className="relative b-r-50 px-4 py-4 shadow-md border-4 border-gray-300 hover:border-core-blue"
                style={{ height: '40rem' }}
              >
                <div className="text-4xl font-bold py-6 text-center">
                  INDIVIDUAL
                </div>
                <div className=" flex items-center justify-center">
                  <img src={RupeeIcon} />
                  <span className="ml-2 text-6xl text-core-blue">500</span>
                </div>
                <div className="mt-4 mb-4 text-core-grey ">per month</div>
                <div className="py-8">
                  <div className="py-2 text-core-green text-lg ">
                    Everything included in free plan
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Unlimited services
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href="https://app.10fold.in/"
                    target="_blank"
                    className="absolute bottom-0 px-10 py-4 rounded-full shadow-md text-xl bg-core-blue text-white font-bold"
                    style={{ bottom: '-30px' }}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-2 sm:px-5 lg:px-10  xxl:px-24 xxxl:px-32 5xl:px-48">
              <div
                className="relative b-r-50 px-4 py-4 shadow-md border-4 border-gray-300 hover:border-core-blue"
                style={{ height: '40rem' }}
              >
                <div className="text-4xl font-bold py-6 text-center">TEAM</div>
                <div className=" flex items-center justify-center">
                  <img src={RupeeIcon} />
                  <span className="ml-2 text-6xl text-core-blue">2000</span>
                </div>
                <div className="mt-4 mb-4 text-core-grey ">per month</div>
                <div className="py-8">
                  <div className="py-2 text-core-green text-lg ">
                    Unlimited staff
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Manage all calendars from one dashboard
                  </div>
                  <div className="py-2 text-core-green text-lg ">
                    Everything included in individual plan
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href="https://app.10fold.in/"
                    target="_blank"
                    className="absolute bottom-0 px-10 py-4 rounded-full shadow-md text-xl bg-core-blue text-white font-bold"
                    style={{ bottom: '-30px' }}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
