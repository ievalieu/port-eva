import React from "react";
import {Link} from "react-router";

import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/portfolio.css";
import "../../styles/module-newfeed.css";
import "../../styles/project.css";

class Portfolio extends React.Component {
	render() {
		return (
			<main>
                <div className="portfolio">
                    <div>
                        <br/><br/><br/>
                        <h2>PORTFOLIO</h2>
                        <p>
                            <span id="research">Research</span> | 
                            <span id="tech">Tech</span> | 
                            <span id="writing">Writing</span>
                        </p><br/><br/>
                    </div>
                    <div className="project-list article-list" id="article-list">
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="summary target">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="project-image target">
                                <img src="#"/>
                            </div>
                            <div className="info">
                                <h3>PROJECT</h3>
                                <Link to="#">LINK</Link>
                            </div>
                        </div>                  
                    </div>
                </div>  
            </main>
		);
	}
}

export default Portfolio;