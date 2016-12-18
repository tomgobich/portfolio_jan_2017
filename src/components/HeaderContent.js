import React from 'react';
import Isvg from 'react-inlinesvg';
import Logo from '../images/logo.svg';



const Header = (props) => {
	return (
		<div className="header navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-md-3">
						<div className="logo-wrap">
							<Isvg src={ Logo }>
								<img src={ Logo } alt="Tom Gobich ~ Front-End Web Developer" />
							</Isvg>
						</div>
					</div>
					<div className="col-xs-4 col-md-9">
						<div className="row">
							<div className="col-md-9">
								<nav className="navigation">
									<a className="home" href="#home"><li>Home</li></a>
									<a className="about" href="#about"><li>About</li></a>
									<a className="portfolio" href="#portfolio"><li>Portfolio</li></a>
									<a className="contact" href="#contact"><li>Contact</li></a>
									<div className="h-rule"></div>
								</nav>
							</div>
							<div className="col-md-3">
								<nav className="social-networks">
									<a className="github"><li><img src="http://placehold.it/30x30" alt="GitHub" /></li></a>
									<a className="twitter"><li><img src="http://placehold.it/30x30" alt="Twitter" /></li></a>
									<a className="linkedin"><li><img src="http://placehold.it/30x30" alt="LinkedIn" /></li></a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
    	</div>
	)
}



export default Header;
