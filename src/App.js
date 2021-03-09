
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './views/Header';
import Slide from './views/Slide';
import Home from './views/Home';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
     <div class="container-fluid">
       <Header />
       <Slide />
       <Home />
       <Footer />
      </div>
    </div>
  );
}

export default App;
