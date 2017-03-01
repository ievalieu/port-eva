import React from "react";
import "./Portfolio.css";

class About extends React.Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="row portfolio-header">
						<h2>PORTFOLIO</h2>
						<h3><span className="project-title">All Projects</span><span className="project-title">Front-End</span><span>Full-Stack</span></h3>
					</div>
					<div className="row">
						<div className="col l12">
							<div className="card sticky-action z-depth-3">
								<div className="card-image waves-effect waves-block waves-light">
									<img className="activator" src="images/office.jpg"/>
								</div>
								<div className="card-content">
									<span className="card-title activator grey-text text-darken-4">CODESPIRATION<i className="material-icons right">more_vert</i></span>
									<p><a href="#">This is a link</a></p>
								</div>
								<div className="card-action">
					            	<a href="#">This is a link</a>
					            </div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
									<p>Here is some more information about this product that is only revealed once clicked on.</p>
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