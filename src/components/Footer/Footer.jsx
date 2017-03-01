<<<<<<< HEAD
import React from "react";
import "./Footer.css";
import {Link} from "react-router";

export default function() {
	return (
		<footer className="page-footer" id="footer">
			<div className="footer-copyright">
				<div className="container right">
					© 2017 Eva Lieu
				</div>
			</div>
		</footer>
	);
=======
import React from "react";
import "./Footer.css";
import {Link} from "react-router";

export default function() {
	return (
		<footer className="page-footer" id="footer">
			<div className="container">
				<div className="row">
					<div className="col l6">
						<h5 className="white-text">Connect</h5>
						<p>This is where the icons for social media will go.</p>
					</div>
					<div className="col l4 offset-l2">
						<ul className="right">
							<li><Link to="/about" className="white-text">About</Link></li>
							<li><Link to="/portfolio" className="white-text">Portfolio</Link></li>
							<li><Link to="/blog" className="white-text">Blog</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					© 2014 Copyright Text
				</div>
			</div>
		</footer>
	);
>>>>>>> 2ed716a9767afa7bce4de636ad515aa1c99cbf13
}