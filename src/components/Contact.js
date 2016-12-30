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

  validateName(e) {
    const defaultClass = "form-control"

    let isValidName     = this.validateEntryString(this.name.value)
    let nameClass       = isValidName ? defaultClass : defaultClass + " invalid"

    this.setState({ nameClass, isValidName })
  }

  validateEmail(e) {
    const defaultClass = "form-control"

    let isValidEmail     = this.validateEmailString(this.email.value)
    let emailClass       = isValidEmail ? defaultClass : defaultClass + " invalid"

    this.setState({ emailClass, isValidEmail })
  }

  validateSubject(e) {
    const defaultClass = "form-control"

    let isValidSubject   = this.validateEntryString(this.subject.value)
    let subjectClass     = isValidSubject ? defaultClass : defaultClass + " invalid"

    this.setState({ subjectClass, isValidSubject })
  }

  validateMessage(e) {
    const defaultClass = "form-control"

    let isValidMessage   = this.validateEntryString(this.message.value)
    let messageClass     = isValidMessage ? defaultClass : defaultClass + " invalid"

    this.setState({ messageClass, isValidMessage })
  }

  submitEmail(e) {
    e.preventDefault()

    if(this.state.isValidName && this.state.isValidEmail && this.state.isValidSubject && this.state.isValidMessage) {
      this.submitForm()
    }
  }

  // Validates input for some form of entry > length of 2
  validateEntryString(field) {
    return field.length >= 3 ? true : false
  }

  // Validates input for email
  validateEmailString(field) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(field) ? true : false;
  }

  submitForm() {
    let promise = $.ajax({
      url: "https://formspree.io/tom@tomgobich.com",
      method: "POST",
      data: $('#contactForm').serialize(),
      dataType: "json"
    })

    promise.done(response => {
      $('#contactForm').hide()
      $('#thankYouResponse').show()
    })

    promise.fail(() => {
      alert('Something went wrong, please ensure all fields are properly filled out and try again.')
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
              <div id="thankYouResponse">
                <h3>Thank you for your email! It will be celebrated over for 1-2 days before the favor is returned to you from me!</h3>
              </div>
              <form ref={(input) => this.contactForm = input} id="contactForm" className="contact-form" onSubmit={(e) => this.submitEmail(e)}>
                <input type="hidden" name="_next" value="/thanks" />
                <input type="text" name="_gotcha" style={hiddenStyle} />
                <div className="row contact-content">
                  <div className="col-xs-12 col-md-6 email-me">
                    <div id="inputName" className="form-group">
                      <label className="control-label">Name:</label>
                      <input ref={(input) => this.name = input}
                             onChange={(e) => this.validateName(e)}
                             type="text"
                             className={this.state.nameClass}
                             name="name"
                             placeholder="Jon Snow"
                             required />
                        <p className="invalid-message">Name isn't long enough</p>
                    </div>
                    <div id="inputEmail" className="form-group">
                      <label className="control-label">Email:</label>
                      <input ref={(input) => this.email = input}
                             onChange={(e) => this.validateEmail(e)}
                             type="email"
                             className={this.state.emailClass}
                             name="email"
                             placeholder="youknownothin@jonsnow.com"
                             required />
                        <p className="invalid-message">Email is invalid</p>
                    </div>
                    <div id="inputSubject" className="form-group">
                      <label className="control-label">Subject:</label>
                      <input ref={(input) => this.subject = input}
                             onChange={(e) => this.validateSubject(e)}
                             type="text"
                             className={this.state.subjectClass}
                             name="_subject"
                             placeholder="You Know Nothin' Jon Snow"
                             required />
                        <p className="invalid-message">Subject isn't long enough</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 email-me">
                    <div id="inputMessage" className="form-group">
                      <label className="control-label">Message:</label>
                      <textarea ref={(input) => this.message = input}
                                onChange={(e) => this.validateMessage(e)}
                                rows="9"
                                className={this.state.messageClass}
                                name="message"
                                placeholder="Ygritte: Is that a palace? Jon Snow: It's a windmill."
                                required />
                        <p className="invalid-message">Message isn't long enough</p>
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
