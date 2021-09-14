//Styles
import './App.scss';
//Dependencies
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React,{ Suspense } from 'react';
//Components
import Navbar from './Components/Navigation/Navbar';
import Loading from './Components/Misc/Loading';

const Auth = React.lazy(()=> import('./Components/Auth/Auth'));
const Profile = React.lazy(()=> import('./Components/Auth/Profile'));
const Menu = React.lazy(()=> import('./Components/Menu/Menu'));
const MenuItem = React.lazy(()=> import('./Components/Menu/MenuItem'));
const Maker = React.lazy(()=> import('./Components/Maker/Maker'));
const NotFound = React.lazy(()=> import('./Components/Misc/NotFound'));

function App() {
  const isLoggedIn = !!useSelector(state=>state.authSlice.token);
  return (
    <div className="App">
      <Navbar/>
      <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact path='/'>
              <Menu />
            </Route>
            <Route path='/auth'>
              {isLoggedIn?<Redirect to="/schedule" />:<Auth/>}
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route exact path='/menu'>
              <Menu/>
            </Route>
            <Route exact path='/maker'>
              <Maker/>
            </Route>
            <Route exact path='/menu/:item'>
              <MenuItem/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Suspense>
    </div>
  );
}

export default App;

