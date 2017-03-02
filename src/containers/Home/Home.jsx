import React from "react";
import "./Home.css";

class Home extends React.Component {
	render() {
		return (
			<main>
				<div className="row container">
					<div className="col l2 m2 s2"></div>
					<div className="col l8 m8 s8">
						<div className="home-card">
							<h4>Hello, I'm</h4> 
							<h1>EVA LIEU</h1>
							<h4>I'm a web developer.</h4>	
						</div>
					</div>
					<div className="col l2 m2 s2"></div>
				</div>
    		</main>
		);
	}
}
export default Home;