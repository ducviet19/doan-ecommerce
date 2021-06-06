import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Slide() {

  return (
    // <div className="row slide mt-5">
    //   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //     <ol className="carousel-indicators">
    //       <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    //       <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    //     </ol>
    //     <div className="carousel-inner" role="listbox">
    //       <div className="carousel-item active">
    //         <img className="d-block w-100 h-100" src="https://theme.hstatic.net/1000340570/1000610409/14/slideshow_2.jpg?v=1546" data-src="holder.js/900x400?theme=social" alt="First slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100 h-100" src="https://theme.hstatic.net/1000340570/1000610409/14/slideshow_1.jpg?v=1546" data-src="holder.js/900x400?theme=industrial" alt="Second slide" />
    //       </div>

    //     </div>
    //     <Link className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true" />
    //       <span className="sr-only">Previous</span>
    //     </Link>
    //     <Link className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true" />
    //       <span className="sr-only">Next</span>
    //     </Link>
    //   </div>
    // </div>

    <div className=" slide">
      <div className="row slide__content">
        <div className="col-2">
          <h1 className="slide__content--title">
            QUY TRÌNH CHĂM SÓC DA CHO BẠN<br />
          </h1>
          <span class="slide__content--btn">
            <span class="slide__content--btn-wrapper">
              <span>KHÁM PHÁ →</span>
            </span>
          </span>
        </div>
        <div className="col-2">
          <img src="https://www.chanel.com/apac/img/prd-emea/sys-master/content/h92/h6d/9284183228446" alt="banner" />
        </div>
      </div>


    </div>


  )

};

export default Slide;