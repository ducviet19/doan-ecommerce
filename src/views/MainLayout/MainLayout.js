import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';



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