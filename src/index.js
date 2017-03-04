import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";
import makeRoutes from "./containers/routes";

const APP_ENTRY = <Router history={ browserHistory }>{makeRoutes()}</Router>;

ReactDOM.render(
  APP_ENTRY,
  document.getElementById('root')
);
