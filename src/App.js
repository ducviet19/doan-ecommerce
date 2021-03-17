import './App.css';
import { auth , handleUserProfile } from "./firebase/ultils";

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

function App() {

  console.log(setCurrentUser())


  const [user, setUser] = useState(null);


  useEffect(() => {
    
   
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        const useRef = await handleUserProfile(user);
     
        useRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          // setUser({
          //   id: snapshot.id,
          //   ...snapshot.data()
          // })
        })
      }
      setUser(user)
    })
  }, []);


  return (
    <div className="App">
      <div class="container-fluid">
        <Router>
          <Header user={user} >

          </Header>
          <Switch>

            <div className="content">
              <Route exact path="/" >
                <HomeLayout />
              </Route>
              <Route path="/login" render={() => user ? <Redirect to="/" /> : (<Login></Login>) }>
              </Route>
              <Route path="/register" render={() => user ? <Redirect to="/" /> : (<Register></Register>) }    >
              </Route>
              <Route path="/product/:id" component={ProductDetail}>
              </Route>
            </div>

          </Switch>
        </Router>
        <Footer> </Footer>
      </div>
     
    </div>
  );
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App) ;