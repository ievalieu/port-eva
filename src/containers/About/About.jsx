import React from "react";
import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/portfolio.css";
import "../../styles/module-newfeed.css";
import "../../styles/contact.css";
import "../../styles/about.css";

class About extends React.Component {
	render() {
		return (
			<main>
				<div className="portfolio about">
					<div>
						<br/><br/><br/>
						<h2>ABOUT ME</h2><br/><br/>
						
						<div className="about-content">
							<p>I’m enamored with the art of storytelling using data, tech, and good ol’ fashioned words. I aim for constant growth and I seek a company interested in creating applications that can spread knowledge in an entertaining and innovative way. Passions include: labor rights, books, tech, travel, and tea.</p>
							<br/>
							<br/><br/>
							<div className="project-techstack">

                                <span className="tech-item">HTML</span>
                                <span className="tech-item">CSS</span>
                                <span className="tech-item">Bootstrap</span>
                                <span className="tech-item">Materialize</span>
                                <span className="tech-item">JavaScript</span>
                                <span className="tech-item">jQuery</span>
                                <span className="tech-item">Node.js</span>
                                <span className="tech-item">Express.js</span>
                                <span className="tech-item">APIs</span>
                                <span className="tech-item">Firebase</span>
                                <span className="tech-item">MongoDB</span>
                                <span className="tech-item">Mongoose</span>
                                <span className="tech-item">MySQL</span>
                                <span className="tech-item">Sequelize</span>
                                <span className="tech-item">React.js</span>
                                <span className="tech-item">Webpack</span>
                                <span className="tech-item">Passport</span>
                                <span className="tech-item">Heroku</span>
                                <span className="tech-item">Github</span>
                                <span className="tech-item">Trello</span>
                                <span className="tech-item">Jira</span>
                            </div>
						</div>
					</div>
				</div>	
			</main>
		);
	}
}
export default About;