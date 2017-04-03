import React from "react";
import "../../styles/portfolio.css";

class About extends React.Component {
	render() {
		return (
			<main>
				<div className="row container">
        <div className="col s12 m12 l12">
            <h1 className="header center">PORTFOLIO</h1>
        </div>
    </div>
    <div className="row">
        <div className="col s12 m12 l12 portfolio z-depth-5">
            <div className="row container">
                <div className="col s12 m6 l4">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="./assets/images/codespiration.jpg"/>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Codespiration<i className="material-icons right">more_vert</i></span>
                            <span className="row">
                                <p className="left"><a href="https://immense-brook-88728.herokuapp.com">Live Demo</a></p>
                                <p className="right"><a href="https://github.com/itsevalieu/codespiration">Github</a></p>
                            </span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Codespiration<i className="material-icons right">close</i></span>
                            <p>Idea generator application for coding exercises. Promotes community-building and geared towards newbie programmers.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col s12 m6 l4">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="./assets/images/jukebox.jpg"/>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Jukebox App<i className="material-icons right">more_vert</i></span>
                            <span className="row">
                                <p className="left"><a href="https://project1spotify.herokuapp.com">Live Demo</a></p>
                                <p className="right"><a href="https://github.com/itsevalieu/jukebox">Github</a></p>
                            </span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Jukebox App<i className="material-icons right">close</i></span>
                            <p>Community playlist application with chatbox.</p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card sticky-action">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="./assets/images/garment.jpg"/>
                        </div>
                        <div className="card-action">
                            <span className="card-title activator grey-text text-darken-4">Train Scheduler<i className="material-icons right">more_vert</i></span>
                            <span className="row">
                                <p className="left"><a className="link" href="#">Live Demo</a></p>
                                <p className="right"><a className="link" href="#">Github</a></p>
                            </span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Garment Worker Center Site<i className="material-icons right">close</i></span>
                            <p>Nonprofit website for Garment Worker Center.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			</main>
		);
	}
}

export default About;