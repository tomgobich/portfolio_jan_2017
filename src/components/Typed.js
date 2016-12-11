import React, { Component } from 'react';
import $ from 'jquery';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('typed.js');


class Typed extends Component {

	constructor(props) {
		super(props);

		// Initial state
		this.state = {
			
		};
	}


	

	componentDidMount() {
		$("#typed").typed({
			strings: this.props.strings,
			typeSpeed: 50,
			backDelay: 1000,
			loop: true,
		});
	}

  render() {
    return (
			<span id="typed"></span>
    );
  }
}

export default Typed;
