import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export default App;
