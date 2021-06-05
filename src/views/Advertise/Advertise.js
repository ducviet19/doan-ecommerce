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
                <img src="//www.chanel.com/apac/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_jpg/w_642/prd-emea/sys-master/content/h4d/h61/9281997570078-HP_CORPO_ONE_PUSH_MOBILE_1920x2550.jpg" alt="" className="offer-img" />
              </div>
              <div className="col-2">
                <p>Nước Hoa</p>
                <h1>BLUE DE CHANEL</h1>
                <small> The free website templates that are showcased here are open source, creative commons or
                  totally free. These free CSS HTML templates can be freely ... </small>
                <a href className="btn">XEM NGAY →</a>
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