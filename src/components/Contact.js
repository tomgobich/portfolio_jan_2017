import React, { Component } from 'react';
import $ from 'jquery';
import AnimatedButton from './AnimatedButton';


class Contact extends Component {

  constructor() {
		super();

    this.state = {
      nameClass: "form-control",
      emailClass: "form-control",
      subjectClass: "form-control",
      messageClass: "form-control",
			isValidName: false,
      isValidEmail: false,
      isValidSubject: false,
      isValidMessage: false
		}
	}

  validateFields() {
    let isValidName     = this.validateEntry(this.name.value)
    let isValidEmail    = this.validateEmail(this.email.value)
    let isValidSubject  = this.validateEntry(this.subject.value)
    let isValidMessage  = this.validateEntry(this.message.value)

    this.setState({ isValidName, isValidEmail, isValidSubject, isValidMessage})
    this.updateClassLists(isValidName, isValidEmail, isValidSubject, isValidMessage);
  }

  updateClassLists(isValidName, isValidEmail, isValidSubject, isValidMessage) {
    let nameClass = this.getClassState(isValidName)
    let emailClass = this.getClassState(isValidEmail)
    let subjectClass = this.getClassState(isValidSubject)
    let messageClass = this.getClassState(isValidMessage)

    this.setState({ nameClass, emailClass, subjectClass, messageClass })
  }

  getClassState(field) {
    const defaultClass = "form-control"
    console.log(field)
    return field ? defaultClass : defaultClass + " invalid"
  }

  submitEmail(e) {
    e.preventDefault()


  }

  // Validates input for some form of entry > length of 2
  validateEntry(field) {
    return field.length >= 3 ? true : false
  }

  // Validates input for email
  validateEmail(field) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(field) ? true : false;
  }

  submitForm(data) {
    $.ajax({
      url: "https://formspree.io/tom@tomgobich.com",
      method: "POST",
      data: $('#contactForm').serialize(),
      dataType: "json"
    })
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
              <form ref={(input) => this.contactForm = input} id="contactForm" className="contact-form" onChange={(e) => this.validateFields(e)} onSubmit={(e) => this.submitEmail(e)}>
                <input type="hidden" name="_next" value="/thanks" />
                <input type="text" name="_gotcha" style={hiddenStyle} />
                <div className="row contact-content">
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Name:</label>
                      <input ref={(input) => this.name = input}
                             type="text"
                             className={this.state.nameClass}
                             name="name"
                             placeholder="Jon Snow"
                             required />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email:</label>
                      <input ref={(input) => this.email = input}
                             type="email"
                             className={this.state.emailClass}
                             name="email"
                             placeholder="youknownothin@jonsnow.com"
                             required />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Subject:</label>
                      <input ref={(input) => this.subject = input}
                             type="text"
                             className={this.state.subjectClass}
                             name="_subject"
                             placeholder="You Know Nothin' Jon Snow"
                             required />
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 email-me">
                    <div className="form-group">
                      <label className="control-label">Message:</label>
                      <textarea ref={(input) => this.message = input}
                                rows="9"
                                className={this.state.messageClass}
                                name="message"
                                placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill."
                                required />
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
