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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ducimus earum maiores impedit animi amet magnam laborum repellat, recusandae delectus inventore consequuntur illum suscipit hic voluptatibus minima dignissimos nesciunt pariatur!</p><br/>
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