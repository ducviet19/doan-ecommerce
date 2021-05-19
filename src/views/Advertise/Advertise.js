import React from 'react';
import Logo from '../Logo/Logo';
import './index.css';

function Advertise(props) {
    return (
        <> 
      
        <div className="offer">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <img src="./images/exclusive.png" alt="" className="offer-img" />
              </div>
              <div className="col-2">
                <p>Excuasd asasd asdasd</p>
                <h1>Smart Brand 4</h1>
                <small> The free website templates that are showcased here are open source, creative commons or
                  totally free. These free CSS HTML templates can be freely ... </small>
                <a href className="btn">Buy Now →</a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="small-container">
            <div className="row">
              <div className="col-3">
                <i className="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit reiciendis quis
                  aspernatur asperiores quos aliquid repudiandae optio exercitationem, minus repellendus minima
                  eius, quasi blanditiis quaerat totam, nesciunt vel omnis!
                </p>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </div>
                <img src="./images/user-1.png" />
                <h3>Jeans heavy</h3>
              </div>
              <div className="col-3">
                <i className="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit reiciendis quis
                  aspernatur asperiores quos aliquid repudiandae optio exercitationem, minus repellendus minima
                  eius, quasi blanditiis quaerat totam, nesciunt vel omnis!
                </p>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </div>
                <img src="./images/user-2.png" />
                <h3>Jeans heavy</h3>
              </div>
              <div className="col-3">
                <i className="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit reiciendis quis
                  aspernatur asperiores quos aliquid repudiandae optio exercitationem, minus repellendus minima
                  eius, quasi blanditiis quaerat totam, nesciunt vel omnis!
                </p>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </div>
                <img src="./images/user-3.png" />
                <h3>Jeans heavy</h3>
              </div>
            </div>
          </div>
        </div>


      <Logo />
        </>
        
    );
}

export default Advertise;