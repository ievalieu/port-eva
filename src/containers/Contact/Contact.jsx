import React from "react";
import axios from "axios";


import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/portfolio.css";
import "../../styles/module-newfeed.css";
import "../../styles/contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          subject: "",
          email: "",
          text: ""
        };
        this.subjectChange = this.subjectChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    subjectChange(event) {
        return this.setState({ subject: event.target.value });
    }
    emailChange(event) {
        return this.setState({ email: event.target.value });
    }
    textChange(event) {
        return this.setState({ text: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        let object = {
            subject: this.refs.subject.value,
            email: this.refs.email.value,
            text: this.refs.text.value
        }
        axios.post("/sent", object).then(function (response) {})
        .catch(function (error) {
            console.log(error);
        });

        function reRender() {
            document.getElementById("contact-content").innerHTML = "<p id='message'>Your message has been sent! I'll try and get back to you as soon as possible!</p>";
        }

        this.setState({
            subject: "",
            email: "",
            text: ""
        }, reRender())
    }
    componentDidMount() {
        let button = document.getElementById("button");
        
        button.onclick = (event) => {
            let warning = document.getElementById("warning");
            if (this.state.subject === "") {
                event.preventDefault();
                warning.innerHTML = "Please enter your name";
            } else if (this.state.email === "") {
                event.preventDefault();
                warning.innerHTML = "Email is required";
            }
            else if (this.state.text === "") {
                event.preventDefault();
                warning.innerHTML = "Text field cannot be blank";
            }
            if (this.state.subject === "" && this.state.email === "" && this.state.text === "") {
                event.preventDefault();
                warning.innerHTML = "Input fields are empty.";
            }
        }
    }
	render() {
		return (
			<main>
                <div className="portfolio" id="contact-content">
                    <div>
                        <br/><br/><br/>
                        <h2>CONTACT</h2>
                        <p>Email: itsevalieu@gmail.com</p>
                        <p>
                            Wanna contact me? Shoot me an email directly!
                        </p><br/><br/>
                        <div>
                            <form className="contact-form" action="/" method="post" onSubmit={this.handleSubmit}>
                                <input ref="subject" type="text" name="subject" placeholder="Name" value={this.state.subject} onChange={this.subjectChange}/><br/>
                                <input ref="email" type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.emailChange}/><br/><br/>
                                
                                <textarea placeholder="Your Message" ref="text" type="text" name="text" value={this.state.text} onChange={this.textChange}></textarea>
                                <button id="contact-form" type="submit">Send</button>
                            </form>             
                        </div>
                    </div>
                </div>  
            </main>
		);
	}
}
export default Contact;












