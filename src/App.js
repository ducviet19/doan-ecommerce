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
import { setCurrentUser } from './redux/User/user.action';
import { connect, useDispatch, useSelector } from 'react-redux';
import Dashboard from './Admin/Dashboard/Dashboard';
import MainLayout from './views/MainLayout/MainLayout';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import FormProduct from './Admin/FormProduct/FormProduct';


const mapState = ({user}) => ({
  user: user.currentUser
})

function App(props) {

  const dispatch = useDispatch();
  const { user } = useSelector(mapState);

  // useEffect(() => {

  //   auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const useRef = await handleUserProfile(user);

  //       useRef.onSnapshot(snapshot => {
  //         dispatch(setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data()
  //         })) 
        
  //       })
  //     }
  //     dispatch(setCurrentUser(user))
  //   })
  // }, []);

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
                <AdminLayout>
                  <Dashboard>
                  </Dashboard>
                </AdminLayout>
              </Route>
              <Route path="/admin/newproduct" >
                <FormProduct>

                </FormProduct>
              </Route>
            </div>

          </Switch>
        </Router>

      </div>

    </div>
  );
}

// const mapStateToProps = ({ user }) => ({
//   user: user.currentUser
// })

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default App;