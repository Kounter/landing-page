import React from 'react';
import MainSVG from 'assets/ending_section_main.svg';

const EndingSection = (props) => {
  return (
    <div
      id="ending-section-container"
      className="py-24 px-20 lg:px-40 xxl:px-64"
    >
      <div className="flex items-center justify-center">
        <img src={MainSVG} />
      </div>
      <div className="mt-24">
        <p className="text-5xl font-bold">Setup your virtual clinic today!</p>
        <p className="mt-10 text-lg">
          Building a digital presence is a key to scale your business. You can
          easily setup your account and share it to make online appointments
          hassle free for your clients. You can see clients’ history, take
          session notes, manage your slots, mark leaves, and much more. We
          promise, you will never need to worry about managing your time
          anymore.
        </p>
      </div>
      <div className="mt-10">
        <button className="px-8 py-4 text-xl rounded-full bg-core-blue text-white font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default EndingSection;
