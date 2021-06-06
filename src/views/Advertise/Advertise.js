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
                <img src="//www.chanel.com/apac/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_jpg/w_960/prd-emea/sys-master/content/h13/h6d/9265163599902-CONTENT-PUSH-ONE-ASIA-2@2x(1).jpg" alt="" className="offer-img" />
              </div>
              <div className="col-2">
                <p>Hòa mình cùng nẵng mùa hạ</p>
                <h1>BLUE DE CHANEL</h1>
                <small> CHANEL Reasearch kết hợp với chuyên gia nông nghiệp, Giáo sư Johannes Grillari của Đại học BOKU và LBI (Vienna, Áo) để thực hiện sứ mệnh: Trau ... </small>
                <a href className="btn">XEM NGAY →</a>
              </div>
            </div>
          </div>
        </div>
        <div className="offer">
          <div className="small-container">
            <div className="row">
            <div className="col-2">
                <p>NÂNG TẦM VẺ ĐẸP</p>
                <h1>LE LIFT</h1>
                <small> CHANEL Reasearch kết hợp với chuyên gia nông nghiệp, Giáo sư Johannes Grillari của Đại học BOKU và LBI (Vienna, Áo) để thực hiện sứ mệnh: Trau ...</small>
                <a href className="btn">XEM NGAY →</a>
              </div>
              <div className="col-2">
                <img src="//www.chanel.com/apac/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_jpg/w_960/prd-emea/sys-master/content/h29/hde/9166405697566-DESC_ONE_landing_PUSH-EDITO_974x974(1).jpg" alt="" className="offer-img" />
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