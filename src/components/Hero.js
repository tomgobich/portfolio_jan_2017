import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import Isvg from 'react-inlinesvg';
import Logo from '../images/logo.svg';
import Typed from './Typed';
import { getWelcomeMessage } from '../assets/welcome-message';



class Hero extends Component {

	constructor(props) {
		super(props);

		// Initial state
		this.state = {
			particleConfig: ParticleConfig,
		};
	}

  render() {

	  	const strings = [
	  		"I'm a front-end web developer",
	  		"Graduate from The Iron Yard",
	  		"Lover of technology (...especially smartphones)",
	  		"Life-long Kentucky Wildcat basketball fan",
	  		"My skills include HTML, CSS, JS, SQL, Database Design, Angular, Node/Express",
	  		"I'm currently learning React, Ember, Elm, and PostCSS",
	  		"My free time is passed utilizing Sudoku, Battlefield, and learning",
	  		"Wow, thanks for staying til the end! You can scroll down now!",
	  		"Reloading sequence...^4000"
	  	]

		return (

			<div className="hero">
				<div className="container-fluid full-height">
					<div className="row full-height">
				 		<div className="col-xs-12 full-height">
							<div className="hero-content">
								<Isvg src={ Logo }>
					            	<img src={ Logo } alt="Tom Gobich ~ Front-End Web Developer" />
					            </Isvg>
								<div className="hero-content-copy">
									<h1 className="welcome-message">{ getWelcomeMessage() }</h1>
									<h2 className="name-line">I'm Tom Gobich</h2>
									<h2 className="intro-line"><Typed strings={ strings } /></h2>
								</div>
								<button className="btn btn-primary">Contact Me</button>
								<button className="btn btn-default">View My Work</button>
							</div>
						</div>
			 		</div>
		 		</div>
				<div className="particle-wrapper">
					<Particles className="particles" params={this.state.particleConfig} />
				</div>
			</div>
		);
  	}
}

export default Hero;
