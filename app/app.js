//Dependencies
//===========================================
var React = require("react");
var ReactDOM = require("react-dom");

//Grab Routes
//===========================================
var routes = require("./config/routes");

//Renders contents according to route page
//===========================================
ReactDOM.render(routes, document.getElementById("app"));