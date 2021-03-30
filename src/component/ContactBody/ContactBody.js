import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css'
const ContactBody = () => {
    return (
        <div className="ContactBody">
            <div className="contact-info">
                <div className="contact-info-title">
                    MILEM | Your Skincare Friend
                </div>
                <div className="contact-info-detail">
                    <div className="contact-info-item">
                        <FontAwesomeIcon icon={faHome} className="contact-icon" />
                        <p className="contact-info-title2">ADDRESS</p>
                        <p>92 Quang Trung</p>
                    </div>
                    <div className="contact-info-item">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                        <p className="contact-info-title2">phone</p>
                        <p>(+84)392539253</p>
                    </div>
                    <div className="contact-info-item">
                        <FontAwesomeIcon icon={faMailBulk} className="contact-icon" />
                        <p className="contact-info-title2">email</p>
                        <p>ngochuan199@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactBody