import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import Login from '../Login/Login';
import Slide from '../Slide';



function MainLayout(props) {

    return (


        <div className="content">
            <Header {...props} />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )

};

export default MainLayout;