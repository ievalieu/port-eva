import React from "react";

import "../../styles/index.css";
import "../../styles/main.css";
import "../../styles/portfolio.css";
import "../../styles/module-newfeed.css";
import "../../styles/contact.css";

class Contact extends React.Component {
	render() {
		return (
			<main>
                <div className="portfolio">
                    <div>
                        <br/><br/><br/>
                        <h2>CONTACT</h2>
                        <p>
                            Wanna contact me? Shoot me an email!
                        </p><br/><br/>
                        <div>
                            <form className="contact-form">
                                <input type="email" name="email" placeholder="Email Address"/><br/><br/>
                                <textarea placeholder="Your Message"></textarea>
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