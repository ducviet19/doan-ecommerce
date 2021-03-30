import React, { Component } from 'react';
import './style.css';

const GoogleMap = () => {
    return (
        <div className="google-map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8244212588374!2d108.21633041458357!3d16.074598488877573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218374466a2b3%3A0xcef5e92c5a7a3917!2zOTIgUXVhbmcgVHJ1bmcsIFRo4bqhY2ggVGhhbmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1616837921112!5m2!1svi!2s"
                width="100%"
                height="100%"
                frameBorder="0"
                aria-hidden="false"
                tabIndex="0" />
        </div>
    );
}


export default GoogleMap;