import React from "react";
import "../../styles/sidebar.css";
import {Link} from "react-router";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<section>
			<ul className="sidebar">
				<Link to="/about" className="sidebar-item"><li>ABOUT</li></Link>
				<Link to="/portfolio" className="sidebar-item"><li>PORTFOLIO</li></Link>
				<Link to="/contact" className="sidebar-item"><li>CONTACT</li></Link>
				<Link to="/resume" className="sidebar-item"><li>RESUME</li></Link>			
			</ul>
		</section>
	);
}