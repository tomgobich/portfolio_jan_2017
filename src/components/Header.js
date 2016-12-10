import React from 'react';
import Isvg from 'react-inlinesvg';
import Logo from '../images/logo.svg';


const Header = (props) => {
	return (
		<div className="header navbar navbar-default">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-md-3">
            <div className="logo-wrap">
              <Isvg src={ Logo }>
                <img src={ Logo } alt="Tom Gobich ~ Front-End Web Developer" />
              </Isvg>
            </div>
          </div>
          <div className="col-xs-4 col-md-6">
            <nav className="navigation">
              <a className="home"><li>Home</li></a>
              <a className="about"><li>About</li></a>
              <a className="portfolio"><li>Portfolio</li></a>
              <a className="contact"><li>Contact</li></a>
              <div className="h-rule"></div>
            </nav>
          </div>
        </div>
      </div>
    </div>
	)
}
		


export default Header;