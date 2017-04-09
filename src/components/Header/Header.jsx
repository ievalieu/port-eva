import React from "react";
import {Link} from "react-router";

import "../../styles/navbar.css";
import Brand from "../../images/ell.png";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<nav>
		<div className="brand-icon">
			<Link to="/"><img className="brand" src={Brand}/></Link>
		</div>
		<div className="brand-title">
			<Link to="/">
				<span id="eva">EVA </span>
				<span id="lieu"> LIEU</span>
			</Link>
		</div>
		<div className="menu">
			<button className="hamburger">&#9776;</button>
			<button className="cross">&#735;</button>
		</div>
	</nav>
	);
}