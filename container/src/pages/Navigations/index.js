import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {connect} from 'react-redux'
import { createBrowserHistory } from "history";
import {setUser} from '../../redux'
import AuthSite from "../AuthSiteApp";
import LoadingIndicator from "../../components/common/LoadingIndicator";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

// Lazy loading component for better performance
const Dashboard = lazy(() => import('../Dashboard'));

const Navigations = (props) => {
  const {setUser, user} = props;
  const [isSignedIn, setIsSignedIn] = useState(false);
  const callbackReduxActions = {
    setUser,
  }

  const callbackReduxState = {
    user
  }

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
    else{
      history.push("/login");
    }
  }, [isSignedIn]);

  const SignInCallback = () =>{
    setIsSignedIn(true)
  }
  return (
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Suspense fallback={<LoadingIndicator />}>
              <Switch>
                <Route exact path="/" render={()=> <AuthSite callbackReduxState={callbackReduxState} callbackReduxActions={callbackReduxActions} SignInCallback={SignInCallback} /> } />
                <Route path="/login"  render={()=> <AuthSite callbackReduxState={callbackReduxState} callbackReduxActions={callbackReduxActions} SignInCallback={SignInCallback} /> } />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </Router>
  );
};
const mapStateToProps = (state) =>{
  return{
    user: state.authorizationReducer.user
  }
}
export default connect(mapStateToProps, {setUser})(Navigations);