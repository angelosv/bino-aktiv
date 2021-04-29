import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect, Route, Switch, BrowserRouter
} from 'react-router-dom';
import Home from './routes/home';
import Statistikk from './routes/statistikk';
import Aktivitet from './routes/aktivitet';
import Teams from './routes/teams';
import Tips from './routes/tips';
import Profile from './routes/profile';
import AddUser from './routes/addUser';
import createHistory from 'history/createBrowserHistory';
import Recovery from './routes/recovery';
import GeneralStatistikk from './routes/generalStatistikk';
const history = createHistory();
export { history };

const PrivateRoute = ({ component: Component, authed, ...rest }) => (

  < Route {...rest} render={(props) => (

    authed !== null
      ? <Component {...props} loggedUser={authed} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />

  )} />
)


const App = () => {
  const loggedUser = localStorage.getItem('user_id');

  return (<>

    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <PrivateRoute authed={loggedUser} path={"/statistikk"} component={Statistikk} exact />
        <PrivateRoute authed={loggedUser} path={"/aktivitet"} component={Aktivitet} exact />
        <PrivateRoute authed={loggedUser} path={"/teams"} component={Teams} exact />
        <Route path={"/tips"} component={Tips} exact />
        <Route path={"/general-statistikk"} component={GeneralStatistikk} exact />
        <Route path={"/recovery"} component={Recovery} exact />
        <PrivateRoute authed={loggedUser} path={"/profile"} component={Profile} exact />
        <Route path={"/add-user"} component={AddUser} exact />
      </Switch>
    </BrowserRouter>
  </>
  )
}


export default App;
