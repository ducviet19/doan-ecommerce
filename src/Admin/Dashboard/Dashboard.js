import React from 'react';
import { Link } from 'react-router-dom';
import useScrollTop from '../../hook/useScrollTop';
import Footer from '../../views/Footer';
import Header from '../../views/Header';
import Aside from '../Aside/Aside';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import Main from '../Main/Main';
import './style.css'

function Dashboard(props) {
  useScrollTop();
  return (
    <div className="container-fluid ">

      <div className="row">
        <Aside />
        <div className="col-10">
          {props.children}
        </div>
        <FooterAdmin />
      </div>
    </div>
  )

}

export default Dashboard;