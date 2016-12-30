import React, { Component } from 'react';
import $ from 'jquery';
import AnimatedButton from './AnimatedButton';


class Contact extends Component {

  // constructor() {
	// 	super();
  //
	// 	this.addFish = this.addFish.bind(this);
	// 	this.loadSamples = this.loadSamples.bind(this);
	// }

  createEmail(e) {
    e.preventDefault();
    this.validateEntry(this.name.value);
  }

  // Validates input for some form of entry > length of 2
  validateEntry(field) {

  }

  submitForm(data) {
    $.ajax({
      url: "https://formspree.io/tom@tomgobich.com",
      method: "POST",
      data: $('#contactForm').serialize(),
      dataType: "json"
    });
  }

  render() {

    let hiddenStyle = { display: "none" }

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
              <form ref={(input) => this.contactForm = input} id="contactForm" className="contact-form" onSubmit={(e) => this.createEmail(e)}>
                <input type="hidden" name="_next" value="/thanks" />
                <input type="text" name="_gotcha" style={hiddenStyle} />
                <div className="row contact-content">
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Name:</label>
                      <input ref={(input) => this.name = input}
                             type="text"
                             className="form-control"
                             name="name"
                             placeholder="Jon Snow" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email:</label>
                      <input ref={(input) => this.email = input}
                             type="email"
                             className="form-control"
                             name="email"
                             placeholder="youknownothin@jonsnow.com" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Subject:</label>
                      <input ref={(input) => this.subject = input}
                             type="text" className="form-control"
                             name="_subject"
                             placeholder="You Know Nothin' Jon Snow" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Message:</label>
                      <textarea ref={(input) => this.message = input}
                                rows="9" className="form-control"
                                name="message" 
                                placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill." />
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
