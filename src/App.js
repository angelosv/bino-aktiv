import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, deleteUser, loginUser, addActivity, logOutUser, getUserActivities, getUserData } from './redux/actions';
import {
  Redirect, Route, Switch, BrowserRouter, browserHistory
} from 'react-router-dom';
import Home from './routes/home'
import Statistikk from './routes/statistikk'
import Aktivitet from './routes/aktivitet'
import Teams from './routes/teams'
import Tips from './routes/tips'
import Profile from './routes/profile'
import AddUser from './routes/addUser'
import { auth } from './firebase'
import createHistory from 'history/createBrowserHistory';
import Dialog from './components/Dialog';

const history = createHistory();
export { history };

const PrivateRoute = ({ component: Component, authed, ...rest }) => (

  < Route {...rest} render={(props) => (

    authed !== null
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />

  )} />
)


const App = () => {
  const dispatch = useDispatch();
  const loggedUser = localStorage.getItem('user_id');
  const authed = useSelector(state => state.auth.authId)
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    console.log(loggedUser)
    if (loggedUser) {
      dispatch(getUserData())
    } else {

    }
  })
  return (<>

    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <PrivateRoute authed={authed} path={"/statistikk"} component={Statistikk} exact />
        <PrivateRoute authed={authed} path={"/aktivitet"} component={Aktivitet} exact />
        <PrivateRoute authed={authed} path={"/teams"} component={Teams} exact />
        <Route path={"/tips"} component={Tips} exact />
        <PrivateRoute authed={authed} path={"/profile"} component={Profile} exact />
        <Route path={"/add-user"} component={AddUser} exact />
      </Switch>
    </BrowserRouter>
  </>
  )
}


export default App;
