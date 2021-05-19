import React from 'react';
import './index.css';
function Logo(props) {
    return (
        <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="./images/logo-godrej.png" />
            </div>
            <div className="col-5">
              <img src="./images/logo-oppo.png" />
            </div>
            <div className="col-5">
              <img src="./images/logo-coca-cola.png" />
            </div>
            <div className="col-5">
              <img src="./images/logo-paypal.png" />
            </div>
            <div className="col-5">
              <img src="./images/logo-philips.png" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Logo;