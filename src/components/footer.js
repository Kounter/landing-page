import React from 'react';
import Logo from 'assets/logo.svg';

const Footer = (props) => {
  let innerWidth = window.innerWidth;
  return (
    <div id="footer-container" className=" p-2">
      <footer className="footer-section">
        {innerWidth < 900 ? (
          <div class="flex flex-col justify-center no-view view-xs mt-8 mb-1">
            <div class="flex items-center justify-center text-sm">
              <a
                href="https://shubham.10fold.in/appointment/27"
                target="_blank"
                class="h-4 mr-4"
              >
                Request Demo
              </a>
              <a
                href="mailto:hello@10fold.in"
                target="_blank"
                class="h-4  mr-4"
              >
                Contact us
              </a>

              <a
                href="https://support.10fold.in/"
                target="_blank"
                class=" h-4 mr-4"
              >
                Support
              </a>
            </div>
            <div class="flex items-center justify-center mt-4 text-sm">
              <a
                href="https://10fold.in/terms.html"
                target="_blank"
                class="h-4 mr-4"
              >
                Terms
              </a>
              <a
                href="https://10fold.in/privacy.html"
                target="_blank"
                class="h-4 mr-4"
              >
                Privacy
              </a>
              <a
                href="https://10fold.in/refund.html"
                target="_blank"
                class="h-4 mr-4"
              >
                Refund Policy
              </a>
            </div>
            <div class="flex justify-between mt-8 px-4 text-sm items-center">
              <img width={100} height={30} src={Logo} alt="10fold logo" />
              <div class="flex flex-row items-center">
                {/* <p class="footer-link footer-copyright no-view-400px">
                      © 2020 KountBI Solutions
                    </p>
                    <div class="footer-vertical-line no-view-400px"></div> */}
                <p class="footer-link footer-mobile-number">+91-9930467093</p>
              </div>
            </div>
          </div>
        ) : (
          <div className=" h-full flex flex-row items-center justify-between">
            <div className="w-auto header-logo flex flex-wrap items-center h-full px-4">
              <div
                className="w-full sm:w-auto mb-2 sm:mb-0"
                onClick={() => this.props.history.replace('/')}
              >
                <img width={100} height={30} src={Logo} alt="10fold logo" />
              </div>
              <div className="ml-1 sm:ml-6 text-sm sm:text-base lg:text-sm">
                <a
                  href="https://shubham.10fold.in/appointment/27"
                  target="_blank"
                >
                  Request Demo
                </a>
              </div>
              <div className="ml-3 sm:ml-8 text-sm sm:text-base lg:text-sm">
                <a href="mailto:hello@10fold.in" target="_blank">
                  Contact us
                </a>
              </div>
              <div className="ml-3 sm:ml-8 text-sm sm:text-base lg:text-sm">
                <a href="https://support.10fold.in/" target="_blank">
                  Support
                </a>
              </div>
              <div className="ml-1 sm:ml-8 text-sm sm:text-base lg:text-sm">
                <a href="https://10fold.in/terms.html" target="_blank">
                  Terms
                </a>
              </div>
              <div className="ml-3 sm:ml-8 text-sm sm:text-base lg:text-sm">
                <a href="https://10fold.in/privacy.html" target="_blank">
                  Privacy
                </a>
              </div>
              <div className="ml-1 sm:ml-8 text-sm sm:text-base lg:text-sm">
                <a href="https://10fold.in/refund.html" target="_blank">
                  Refund Policy
                </a>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex items-center">
                <span className="px-4 text-sm sm:text-base lg:text-sm">
                  ©2020 KountBI Solutions
                </span>
                <span className="px-4 text-sm sm:text-base lg:text-sm border-l border-gray-500">
                  +91-9930467093
                </span>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
