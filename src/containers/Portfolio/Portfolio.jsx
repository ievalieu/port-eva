import React from "react";
import {Link} from "react-router";
import "../../styles/portfolio.css";
import "../../styles/project.css";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
	render() {
		return (
			<main>
                <div className="portfolio">
                    <div>
                        <br/><br/><br/>
                        <h2>PORTFOLIO</h2>
                    </div>
                    <div className="project-list article-list">
                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">Codespiration</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">Code project idea  generator for newbie web  developers looking  to practice code and find a community.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">JavaScript</span>
                                <span className="tech-item">CSS</span>
                                <span className="tech-item">Node</span>
                                <span className="tech-item">Express</span>
                                <span className="tech-item">React</span>
                                <span className="tech-item">Mongoose</span>
                                <span className="tech-item">Webpack</span>
                                <span className="tech-item">Passport</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://codespiration.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/project3-react" target="_blank">GITHUB</Link>
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">Jukebox</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">Spotify API music player with live chatroom using firebase.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">HTML</span>
                                <span className="tech-item">Custom CSS</span>
                                <span className="tech-item">Javascript</span>
                                <span className="tech-item">jQuery</span>
                                <span className="tech-item">APIs</span>
                                <span className="tech-item">Firebase</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://jukeboxproject.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/jukebox" target="_blank">GITHUB</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">NYT Scraper</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">New York Times article scraper.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">JavaScript</span>
                                <span className="tech-item">Materialize</span>
                                <span className="tech-item">Node</span>
                                <span className="tech-item">Express</span>
                                <span className="tech-item">React</span>
                                <span className="tech-item">Axios</span>
                                <span className="tech-item">Mongoose</span>
                                <span className="tech-item">Webpack</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://nytreact-scraper.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/nytreact" target="_blank">GITHUB</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">Train Scheduler</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">Keeps track of your train schedules and allows you to post new train routes.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">HTML</span>
                                <span className="tech-item">CSS</span>
                                <span className="tech-item">Bootstrap</span>
                                <span className="tech-item">JavaScript</span>
                                <span className="tech-item">jQuery</span>                   
                                <span className="tech-item">Bootstrap</span>
                                <span className="tech-item">Firebase</span>
                                <span className="tech-item">Moment.js</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://traintimetracker.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/train-scheduler" target="_blank">GITHUB</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">Friend Finder</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">Find a friend using this full-stack site that will take in the results of users' surveys, compare them, and display the best overall match.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">HTML</span>
                                <span className="tech-item">CSS</span>
                                <span className="tech-item">Bootstrap</span>
                                <span className="tech-item">Express</span>
                                <span className="tech-item">Node</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://friendplease.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/friend-finder" target="_blank">GITHUB</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <h3 className="project-title">Hypertext Poem</h3>
                            </div>
                            <div className="project-body target">
                                <p className="project-summary">Interactive poem of T.S. Eliot's "The Wasteland" through a personal lens.</p>
                            </div>
                            <div className="project-techstack">
                                <span className="tech-item">HTML</span>
                                <span className="tech-item">CSS</span>
                                <span className="tech-item">Materialize</span>
                                <span className="tech-item">JavaScript</span>
                                <span className="tech-item">jQuery</span>
                            </div>
                            <div className="project-links">
                                <Link to="https://hypertextonsteriods.herokuapp.com/" target="_blank">DEMO</Link>
                                <Link to="https://github.com/itsevalieu/hypertext" target="_blank">GITHUB</Link>
                            </div>
                        </div>
                                      
                    </div>
                </div>  
            </main>
		);
	}
}

export default Portfolio;