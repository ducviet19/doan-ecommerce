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
                            <img src="https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div className="col-3">
                            <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div className="col-3">
                            <img src="https://images.pexels.com/photos/3851294/pexels-photo-3851294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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