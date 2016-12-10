import React, { Component } from 'react';
import $ from 'jquery';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';


class Hero extends Component {

	constructor() {
		super();

		// Initial state
		this.state = {
			particleConfig: ParticleConfig,
		};
	}

	componentWillMount() {

	}

  render() {

    return (
    	<div className="container-fluid">
    		<div className="row">
	    		<div className="col s12 m10 offset-m1">
	    			<div className="hero">
							<div className="hero-content">
								<h2 className="intro-line">Welcome</h2>
								<div className="head-underscore"></div>
								<h2 className="sub-line">I'm Tom Gobich</h2>
								<div id="typed-strings">
									<p id="typedDescription" className="description-line">A Cincinnati Based Front-End Developer</p>
									<p className="description-line">Currently Studying at The Iron Yard</p>
								</div>
								<p className="description-line"><span id="typed"></span></p>
								<button>Contact Me</button>
							</div>
							<div className="particle-wrapper">
								<Particles className="particles" params={this.state.particleConfig} />
							</div>
						</div>
	    		</div>
	    	</div>
    	</div>
    );
  }
}

export default Hero;
