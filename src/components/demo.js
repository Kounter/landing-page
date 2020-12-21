import React from 'react';
import BlueLineSVG from 'assets/blue_line.svg';

const DemoSection = (props) => {
  return (
    <div className="py-20">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x400"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div>
            <img src={BlueLineSVG} />
          </div>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Watch this 5 min short demo
          </h1>
          <p class="mb-8 leading-relaxed">
            We made it specially for you to help you get started with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;