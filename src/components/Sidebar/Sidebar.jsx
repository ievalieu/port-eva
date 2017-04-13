import React from "react";
import "../../styles/sidebar.css";
import {Link} from "react-router";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<section id="myDiv">
			<ul className="sidebar">
				<Link to="/about" className="sidebar-item"><li>ABOUT</li></Link>
				<Link to="/portfolio" className="sidebar-item"><li>PORTFOLIO</li></Link>
				<Link to="/contact" className="sidebar-item"><li>CONTACT</li></Link>
				<Link to="https://drive.google.com/open?id=0B8XOeYfg6qZuMFRNeXZGcUdRQnc" target="_blank" className="sidebar-item"><li>RESUME</li></Link>			
			</ul>
		</section>
	);
}