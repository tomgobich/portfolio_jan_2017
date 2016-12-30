import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioContent from '../assets/portfolio-content.json';


class Contact extends Component {
  render() {
		return (
			<div id="contact" className="contact">
				<div className="container-fluid">
					<div className="row">
            <div className="col-xs-12 col-lg-10 col-lg-offset-1">
              <h2>Get In Touch</h2>
              <div className="header-underscore"></div>
              <p>
                Feel free to contact me below
              </p>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <form id="contactForm">
                    <div className="form-group">
                      <label for="name" className="control-label">Name:</label>
                      <input type="text" className="form-control" name="name" placeholder="Jon Snow" />
                    </div>
                    <div className="form-group">
                      <label for="email" className="control-label">Email:</label>
                      <input type="email" className="form-control" name="email" placeholder="youknownothin@jonsnow.com" />
                    </div>
                    <div className="form-group">
                      <label for="subject" className="control-label">Subject:</label>
                      <input type="text" className="form-control" name="subject" placeholder="You Know Nothin' Jon Snow" />
                    </div>
                    <div className="form-group">
                      <label for="name" className="control-label">Name:</label>
                      <textarea rows="4" className="form-control" name="message" placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill." />
                    </div>
                  </form>
                </div>
              </div>
            </div>
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default Contact;
