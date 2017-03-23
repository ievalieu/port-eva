import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App/App.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";

export default () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />

			<Route path="/about" component={About} />
			<Route path="/portfolio" component={Portfolio} />
		</Route>
	);
}