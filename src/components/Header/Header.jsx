import React from "react";
import "../../styles/navbar.css";
import {Link} from "react-router";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<nav>
		<div className="brand-icon">
			<Link to="/"><img src="./assets/images/ell.png"/></Link>
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