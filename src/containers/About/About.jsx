import React from "react";
import "../../styles/about.css";

class About extends React.Component {
	render() {
		return (
			<main>
				<div className="row container">
			        <div className="col s12 m12 l12">
			            <h1 className="header center">ABOUT ME</h1>
			        </div>
			    </div>
			    <div className="row">
			        <div className="col s12 m12 l12 about z-depth-5">
			            <div className="row">
			                <div className="col m2 l2"></div>
			                <div className="col s12 m8 l8">
			                    <div className="card">
			                        <div className="card-content">
			                            <img src="#"/>
			                            <span className="content">
				                            <p>I am a recent UCLA graduate with a degree in English and a minor in Labor and Workplace Studies. Currently, I am enrolled in the Coding Boot Camp at UCLA Extension for Full-Stack Web Development.</p>
				                            <br/>
				                            <p>I’m enamored with the art of storytelling using data, tech, and good ol’ fashioned words. I aim for constant growth and I seek a company interested in creating applications that can spread knowledge in an entertaining and innovative way. Passions include: labor rights, books, tech, travel, and tea.</p>
			                            </span> 
			                        </div>
			                        <div className="card-action">
			                            <div className="row">    
			                                <div className="chip">HTML5</div>
			                                <div className="chip">CSS3</div>
			                                <div className="chip">JavaScript</div>
			                                <div className="chip">jQuery</div>
			                                <div className="chip">React.js</div>
			                                <div className="chip">MongoDB</div>
			                                <div className="chip">Mongoose</div>
			                                <div className="chip">MySQL</div>
			                                <div className="chip">Heroku</div>
			                                <div className="chip">Materialize</div>
			                                <div className="chip">Bootstrap</div>
			                                <div className="chip">Express.js</div>
			                                <div className="chip">Node.js</div>
			                                <div className="chip">APIs</div>
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