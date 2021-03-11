
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './views/Header';
import Slide from './views/Slide';

import Footer from './views/Footer';
import HomeLayout from './views/Home/HomeLayout';
import Login from './views/Login/Login';
import MainLayout from './views/MainLayout/MainLayout';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <Router>
          <Header>

          </Header>
          <Switch>

            <div className="content">
              <Route exact path="/" >
                <HomeLayout />
              </Route>
              <Route path="/login" component={Login}>
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
