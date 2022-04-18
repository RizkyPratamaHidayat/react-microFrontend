/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../Header";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {createStore, applyMiddleware} from 'redux';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../../../../redux/rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)
afterEach(cleanup)

const history = createBrowserHistory();
it("render correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router  history={history}>
        <Header/>
      </Router>
    </Provider>
  );
  expect(getByTestId("header"));
});



