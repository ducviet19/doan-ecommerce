
import './App.css';
import { auth , handleUserProfile } from "./firebase/ultils";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './views/Header';
import Slide from './views/Slide';

import Footer from './views/Footer';
import HomeLayout from './views/Home/HomeLayout';
import Login from './views/Login/Login';
import MainLayout from './views/MainLayout/MainLayout';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import { useEffect, useState } from 'react';

function App() {


  let authListener;

  const [user, setUser] = useState(null);


  useEffect(() => {
    
    authListener = auth.onAuthStateChanged(async (user) => {

      if(user) {
        const useRef = await handleUserProfile(user);
        useRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setUser(null)

      
    })
  }, []);

  console.log(authListener)




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

export default App;
