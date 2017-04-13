import React from "react";
import {Link} from "react-router";
import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/module-landing.css";
import "../../styles/module-newfeed.css";
import "../../styles/module-connect.css";
// import Facebook from "../../icons/fb-logo.png";
import Twitter from "../../icons/twitter-logo.png";
import LinkedIn from "../../icons/linkedin-logo.png";
// import Google from "../../icons/google-logo.png";
import Github from "../../icons/github-logo.png";

class Home extends React.Component {
	render() {
		return (
			<main>

				<div className="card module-landing">
					<div className="card-border-top">
						<h2>HELLO WORLD</h2>
						<p id="para">I’m a web developer.<br/> Check out my work and learn more about me below:</p>
						<Link to="/about"><button>Learn More</button></Link>
					</div>
				</div>

				<div className="card module-newsfeed">
					<div className="card-border-middle">
						<h2>NEWSFEED</h2>
						<p>Check out some of my recent work below:</p><br/>
						<div className="sample-list">
							<Link to="/portfolio"><div className="sample1"></div></Link>
							<Link to="/portfolio"><div className="sample2"></div></Link>
							<Link to="/portfolio"><div className="sample3"></div></Link>
						</div><br/>
						<p>Or check them all out here~</p><br/>
						<Link to="/portfolio"><button>Learn More</button></Link>
					</div>
				</div>

				<div className="card module-connect">
					<div className="card-border-bottom">
						<h2>CONNECT</h2>
						<p>Wanna Connect?</p>
						<div className="connect-list">
							<Link to="https://www.twitter.com/itsevalieu/" target="_blank"><img className="icon" src={Twitter}/></Link>
							<Link to="https://www.linkedin.com/in/eva-lieu/" target="_blank"><img className="icon" src={LinkedIn}/></Link>
							<Link to="https://github.com/itsevalieu" target="_blank"><img className="icon" src={Github}/></Link>
						</div>
						<p>Or if you wanna email me...</p><br/>
						<Link to="/contact"><button>Contact Me</button></Link>
					</div>
				</div>	

			</main>
		);
	}
}
export default Home;
// <Link to="https://www.linkedin.com/in/eva-lieu/" target="_blank"><img className="icon" src={Facebook}/></Link>
// <Link to=""><img className="icon" src={Google}/></Link>
