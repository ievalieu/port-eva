import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App/App";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

export default () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />

			<Route path="/about" component={About} />
			<Route path="/portfolio" component={Portfolio} />
		</Route>
	);
}