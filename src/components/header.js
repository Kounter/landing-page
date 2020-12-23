import React from 'react';
import LogoSVG from 'assets/logo.svg';

const Header = (props) => {
  return (
    <div id="header-container">
      <div className="px-4 py-10">
        <div className="flex items-center justify-between">
          <div>
            <img src={LogoSVG} />
          </div>
          <div className="flex items-center text-xl font-bold px-10">
            <div className="hover:text-core-blue cursor-pointer">Home</div>
            <div className="ml-10 hover:text-core-blue cursor-pointer">
              Pricing
            </div>
            <div className="ml-10 hover:text-core-blue cursor-pointer">
              <a
                href="https://shubham.10fold.in/appointment/27"
                target="_blank"
              >
                Demo
              </a>
            </div>
            <div className="ml-10 hover:text-core-blue cursor-pointer">
              <a href="https://app.10fold.in/" target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
