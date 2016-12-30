import React, { Component } from 'react';
import AnimatedButton from './AnimatedButton';


class Contact extends Component {
  render() {
		return (
			<div id="contact" className="contact">
				<div className="container-fluid">
					<div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <h2>Contact</h2>
              <div className="header-underscore"></div>
              <ul className="contact-list">
                <li>
                  <a href="mailto:tom@tomgobich.com">
                    <span className="mif-mail"></span> tom@tomgobich.com
                  </a>
                </li>
                <li>
                  <a href="tel:513-375-4400">
                    <span className="mif-phone"></span> 513-375-4400
                  </a>
                </li>
              </ul>
              <form id="contactForm" className="contact-form">
                <div className="row contact-content">
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Name:</label>
                      <input type="text" className="form-control" name="name" placeholder="Jon Snow" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email:</label>
                      <input type="email" className="form-control" name="email" placeholder="youknownothin@jonsnow.com" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Subject:</label>
                      <input type="text" className="form-control" name="subject" placeholder="You Know Nothin' Jon Snow" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Name:</label>
                      <textarea rows="9" className="form-control" name="message" placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill." />
                    </div>
                    <div className="button-group">
                      <AnimatedButton idName="btnContactSubmit" classList="btn btn-primary" text="Send Email" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default Contact;
