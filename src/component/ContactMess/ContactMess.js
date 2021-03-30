import React, { Component } from 'react';
import './style.css';

import GoogleMap from './GoogleMap';

const ContactMess = () => {

    return (
        <div className="GetInTouch flex">
            <div className="getintouch-container">
                <div className="map">
                    <GoogleMap />
                </div>
                <form className="getintouch-form">
                    <label>Contact Us</label>
                    <input placeholder="Name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Subject"></input>
                    <input placeholder="Message"></input>
                    <button className="btn">Send message</button>
                </form>
            </div>
        </div>
    )
}
export default ContactMess




