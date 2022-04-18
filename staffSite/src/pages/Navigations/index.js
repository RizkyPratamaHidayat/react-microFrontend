import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import List from "../List";
import Detail from '../Detail';

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history, callbackReduxState }) => {
  console.log('222 : ', callbackReduxState)
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <List />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
