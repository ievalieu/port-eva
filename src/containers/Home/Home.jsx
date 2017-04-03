import React from "react";
//import "./Home.css";

class Home extends React.Component {
	render() {
		return (
			<main>
				<div className="row home">
					<div className="col s12 m12 l12 z-depth-5">
						<div class="row">
                			<div class="col l1 m2 s2"></div>
                			<div class="col l10 m8 s8">
			                    <div class="home-card">
			                        <h2>Hello world, I'm</h2><br/>
			                        <h1>EVA LIEU</h1>
			                        <h2>I'm a web developer.</h2>   
			                    </div>
		                	</div>
		                	<div class="col l1 m2 s2"></div>
           				</div>
					</div>
				</div>
    		</main>
		);
	}
}
export default Home;