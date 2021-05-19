import React, { Component } from 'react';
import './style.css';
import Home from '../Main/Home';
import Slide from '../Slide';
import Advertise from '../Advertise/Advertise';



function HomeLayout() {
    return (
        <>
            <Slide />
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src="./images/category-1.jpg" />
                        </div>
                        <div className="col-3">
                            <img src="./images/category-2.jpg" />
                        </div>
                        <div className="col-3">
                            <img src="./images/category-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <Home />
            <Advertise />
        </>
    )

};

export default HomeLayout;