import React from "react";
import store from "./redux/store";
import {Provider} from 'react-redux';
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import Navigations from "./pages/Navigations";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  return (
    <Provider data-testid="App" store={store}>
      <Navigations />
    </Provider>
  );
};
