import React from "react";
import {Link} from "react-router";
import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/module-landing.css";
import "../../styles/module-newfeed.css";
import "../../styles/module-connect.css";

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
							<div className="sample"></div>
							<div className="sample"></div>
							<div className="sample"></div>
						</div><br/>
						<p>Or check them all out here~</p><br/>
						<Link to="/portfolio"><button>Learn More</button></Link>
					</div>
				</div>

				<div className="card module-connect">
					<div className="card-border-bottom">
						<h2>CONNECT</h2>
						<p>Wanna Connect?</p><br/>
						<div className="connect-list">
							<img className="icon" src="./assets/icons/fb-logo.png"/>
							<img className="icon" src="./assets/icons/twitter-logo.png"/>
							<img className="icon" src="./assets/icons/linkedin-logo.png"/>
							<img className="icon" src="./assets/icons/google-logo.png"/>
							<img className="icon" src="./assets/icons/github-logo.png"/>
						</div><br/>
						<p>Or if you wanna email me...</p><br/>
						<Link to="/contact"><button>Contact Me</button></Link>
					</div>
				</div>	

			</main>
		);
	}
}
export default Home;