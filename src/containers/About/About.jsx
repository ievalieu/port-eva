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
						<h2>ABOUT ME</h2>
						<p>
							<span id="resume">Resume</span> | 
							<span id="portfolio">Portfolio</span> | 
							<span id="contact">Contact</span>
						</p><br/><br/>
						<div className="about-content">
							<p>I’m enamored with the art of storytelling using data, tech, and good ol’ fashioned words. I aim for constant growth and I seek a company interested in creating applications that can spread knowledge in an entertaining and innovative way. Passions include: labor rights, books, tech, travel, and tea.</p><br/>
							<p>TECH KNOWN</p><br/>
							<p>INTERESTS</p>
						</div>
					</div>
				</div>	
			</main>
		);
	}
}
export default About;