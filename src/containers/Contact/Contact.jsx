import React from "react";
import "../../styles/contact.css";

class About extends React.Component {
	render() {
		return (
			<main>
				<div className="row container">
        <div className="col s12 m12 l12">
            <h1 className="header center">CONTACT ME</h1>
        </div>
    </div>
    <div className="row">
        <div className="col s12 m12 l12 about z-depth-5">
            <div className="row">
                <div className="col m2 l2"></div>
                <div className="col s12 m8 l8">
                    <div className="card">
                        <div className="card-content">
                            <h5>Looking for a web developer?</h5>
                            <br/>
                            <h5>Feel free to contact me and connect via the links below!</h5>
                        </div>
                        <div className="card-action">
                            <div className="row"> 
                                <span>
                                <a href="https://www.linkedin.com/in/eva-lieu/" target="_blank"><img src="./assets/icons/linkedin-logo.png" alt="logo" className="App-logo"/></a>
                                <a href="https://github.com/itsevalieu" target="_blank"><img src="./assets/icons/github-logo.png" alt="logo" className="App-logo"/></a>
                                <a href="mailto:itsevalieu@gmail.com" target="_blank"><img src="./assets/icons/google-logo.png" alt="logo" className="App-logo"/></a>
                                <a href="https://www.twitter.com/itsevalieu/" target="_blank"><img src="./assets/icons/twitter-logo.png" alt="logo" className="App-logo"/></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m2 l2"></div>    
            </div>
        </div>
    </div>
    		</main>
		);
	}
}
export default About;