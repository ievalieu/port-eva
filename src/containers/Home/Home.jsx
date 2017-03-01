<<<<<<< HEAD
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
=======
import React from "react";
import "./Home.css";

class Home extends React.Component {
	render() {
		return (
			<main>
				<div className="row container">
					<div className="col l12">
						<div className="card horizontal z-depth-3">
							<div className="card-image">
								<img src="#"/>
							</div>
							<div className="card-stacked">
								<div className="card-content">
									<h4>About Me</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, hic pariatur voluptas ex quis quam quasi debitis. Laudantium incidunt sit placeat, laboriosam neque. Sapiente nemo dolorum optio eos, ipsa ipsam.</p>
								</div>
								<div className="card-action">
									<a href="#">This is a link</a>
								</div>
							</div>
						</div>
					</div>
				</div>
    		</main>
		);
	}
}
>>>>>>> 2ed716a9767afa7bce4de636ad515aa1c99cbf13
export default Home;