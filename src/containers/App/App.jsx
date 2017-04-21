import React, { Component } from 'react';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Sidebar/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}
export default App;
