//Dependencies
//===========================================
var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

//Reference the high-level components
//===========================================
var Main = require("../components/Main.js");


//Export the Routes
//===========================================
module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
);