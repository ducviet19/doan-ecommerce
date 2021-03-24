import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../views/Footer';
import Header from '../../views/Header';
import Aside from '../Aside/Aside';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import Main from '../Main/Main';
import './style.css'

function Dashboard(props) {
  return (
    <div className="container-fluid row">

      <Aside  />
        <div>
          {props.children}
        </div>
      <FooterAdmin />
      
    </div>
  )

}

export default Dashboard;