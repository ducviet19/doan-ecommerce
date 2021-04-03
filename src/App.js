import './style.css';
import { auth, handleUserProfile } from "./firebase/ultils";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeLayout from './views/Home/HomeLayout';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ProductDetail from './views/ProductDetail/ProductDetail';
import { useEffect } from 'react';
import { checkUserSession } from './redux/User/user.action';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './Admin/Dashboard/Dashboard';
import MainLayout from './views/MainLayout/MainLayout';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import withAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';
import FormProduct from './Admin/FormProduct/FormProduct';
import ListProduct from './Admin/Product/Listproduct/ListProduct';
import Main from './Admin/Main/Main';
import EditProduct from './Admin/Product/EditProduct.js/EditProduct';
import Shop from './views/Shop/Shop'
import Contact from './views/Contact/contact';
import ListUser from './Admin/Users/ListUser/ListUser';
import Cart from './views/Cart/Cart';
import Payment from './views/Payment/Payment';
import CheckOut from './views/CheckOut/CheckOut';


const mapState = ({ user }) => ({
  user: user.currentUser
})

function App(props) {

  const dispatch = useDispatch();
  const { user } = useSelector(mapState);
  console.log(user)

  useEffect(() => {
    dispatch(checkUserSession());

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
              <Route exact path='/shop' >
                <MainLayout>
                  <Shop />
                </MainLayout>
              </Route>
              <Route path='/shop/:filterType' >
                <MainLayout>
                  <Shop />
                </MainLayout>
              </Route>
              <Route path='/contact' >
                <MainLayout>
                  <Contact />
                </MainLayout>
              </Route>
              <Route path="/login" render={() => user ? <Redirect to="/" /> : (<MainLayout><Login></Login> </MainLayout>)}>
              </Route>
              <Route path="/register" render={() => user ? <Redirect to="/" /> : (<MainLayout><Register></Register> </MainLayout>)}    >
              </Route>
              <Route path="/product/:id">
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              </Route>
              <Route path="/cart">
                <MainLayout>
                  <CheckOut />
                </MainLayout>
              </Route>
              <Route path="/payment">
                <MainLayout>
                  <Payment />
                </MainLayout>
              </Route>

              <Route exact path="/admin/" >
                <WithAdminAuth>
                  <Dashboard>
                    <Main />
                  </Dashboard>
                </WithAdminAuth>

              </Route>
              <Route exact path="/admin/newproduct" >
                <Dashboard>
                  <FormProduct />
                </Dashboard>

              </Route>
              <Route path="/listproduct" >
                <Dashboard>
                  <ListProduct />
                </Dashboard>
              </Route>
              <Route path="/editproduct/:id" >
                <Dashboard>
                  <EditProduct />
                </Dashboard>
              </Route>
              <Route exact path="/listuser" >
                <Dashboard>
                  <ListUser />
                </Dashboard>
              </Route>
            </div>
          </Switch>
        </Router>

      </div>

    </div>
  );
}


export default App;