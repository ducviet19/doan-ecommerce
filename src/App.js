import './style.css';
import { auth, handleUserProfile } from "./firebase/ultils";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './views/Header';

import Footer from './views/Footer';
import HomeLayout from './views/Home/HomeLayout';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ProductDetail from './views/ProductDetail/ProductDetail';
import { useEffect, useState } from 'react';
import { setCurrentUser } from './redux/User/user.action';
import { connect } from 'react-redux';
import Dashboard from './Admin/Dashboard/Dashboard';
import MainLayout from './views/MainLayout/MainLayout';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import FormProduct from './Admin/FormProductDetail/FormProduct';
import Order from './views/Orders/Order';

function App(props) {




  useEffect(() => {


    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const useRef = await handleUserProfile(user);

        useRef.onSnapshot(snapshot => {
          props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          // setUser({
          //   id: snapshot.id,
          //   ...snapshot.data()
          // })
        })
      }
      props.setCurrentUser(user)
    })
  }, []);




  return (
    <div className="App">
      <div class="container-fluid">
        <Router>

          <Switch>

            <div >
              <Route exact path="/" >
                <MainLayout>
                  <HomeLayout />
                </MainLayout>

              </Route>
              <Route path="/login" render={() => props.user ? <Redirect to="/" /> : (<MainLayout><Login></Login> </MainLayout>)}>
              </Route>
              <Route path="/register" render={() => props.user ? <Redirect to="/" /> : (<MainLayout><Register></Register> </MainLayout>)}    >
              </Route>
              <Route path="/product/:id">
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              </Route>
              <Route path="/order">
                <Order />
              </Route>

              <Route path="/admin" >
                <AdminLayout>
                  <Dashboard>
                  </Dashboard>
                </AdminLayout>
              </Route>
              <Route path="/admin/newproduct" >
                <FormProduct />
              </Route>
            </div>

          </Switch>
        </Router>

      </div>

    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);