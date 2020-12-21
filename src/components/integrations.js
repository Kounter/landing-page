import React from 'react';
import ZoomImg from 'assets/zoom.png';
import GoogleMeetImg from 'assets/google_meet.png';
import CashfreeImg from 'assets/cashfree.png';
import StripeImg from 'assets/stripe.png';

const IntegrationsSection = (props) => {
  return (
    <div id="integrations-section" className="py-20">
      <div className="px-20 py-6 text-3xl font-bold">
        We're integrated with your favorite tools
      </div>

      <div className="py-10 px-20 lg:px-40 xxl:px-64 text-xl flex items-center justify-between font-bold">
        <div>
          <img src={ZoomImg} />
          <div>Zoom</div>
        </div>
        <div>
          <div></div>
          <img src={GoogleMeetImg} />
          <div>Google Meet</div>
        </div>
        <div>
          <img src={CashfreeImg} />
          <div>Cashfree</div>
        </div>
        <div>
          <img src={StripeImg} />
          <div>Stripe</div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
