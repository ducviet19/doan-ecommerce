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
              <Route path="/login" render={() => user ? <Redirect to="/" /> : (<MainLayout><Login></Login> </MainLayout>)}>
              </Route>
              <Route path="/register" render={() => user ? <Redirect to="/" /> : (<MainLayout><Register></Register> </MainLayout>)}    >
              </Route>
              <Route path="/product/:id">
                <MainLayout>
                  <ProductDetail />
                </MainLayout>
              </Route>

              <Route path="/admin" >
                <WithAdminAuth>
                  <Dashboard>
                    <Main />
                  </Dashboard>
                </WithAdminAuth>

              </Route>
              <Route path="/newproduct" >
                <Dashboard>
                  <FormProduct />
                </Dashboard>

              </Route>
              <Route path="/product" >
                <Dashboard>
                  <ListProduct />
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