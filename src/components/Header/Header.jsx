import React from "react";
import {Link} from "react-router";

import "../../styles/header.css";
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
			<div className="placeholder"></div>
		</nav>
	);
}