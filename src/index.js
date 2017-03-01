import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import './index.css';
=======
import './index.css';
>>>>>>> 2ed716a9767afa7bce4de636ad515aa1c99cbf13
import { Router, browserHistory } from "react-router";
import makeRoutes from "./containers/routes";

const APP_ENTRY = <Router history={ browserHistory }>
	{makeRoutes()}
	</Router>;

ReactDOM.render(
  APP_ENTRY,
  document.getElementById('root')
);
