import React, { Component } from 'react';
import $ from 'jquery';
import Isvg from 'react-inlinesvg';
import Logo from '../images/logo.svg';



class Header extends Component {

  toggleNavSmall() {
    let $navSmall = $('#navSmall');

    // is fadeInDown current action?
    if($navSmall.hasClass('fadeInDown'))
    {
      // Yes, remove that animation and add fadeOutDown
      $navSmall.removeClass('animated fadeInDown')
      $navSmall.addClass('animated fadeOutDown')
    }
    else
    {
      // No, remove that animation and add fadeOutDown
      $navSmall.removeClass('animated fadeOutDown')
      $navSmall.addClass('animated fadeInDown')
    }

    $('#menuIcon').toggleClass('active')
  }

  render() {
  	return (
  		<div>
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
    						<div className="row nav-large">
    							<div className="col-md-9">
    								<nav id="menu" className="navigation">
    									<a className="home" data-anchor="home" href="#home"><li>Home</li></a>
    									<a className="about" data-anchor="about" href="#about"><li>About</li></a>
    									<a className="portfolio" data-anchor="portfolio" href="#portfolio"><li>Portfolio</li></a>
    									<a className="contact" data-anchor="contact" href="#contact"><li>Contact</li></a>
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
                <div className="row nav-small">
    							<div className="col-md-9">
                    <i id="menuIcon" className="fa fa-bars nav-small-menu-icon" onClick={this.toggleNavSmall} aria-hidden="true"></i>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
        </div>
        <div id="navSmall" className="container-fluid nav-small-content" onClick={this.toggleNavSmall}>
          <div className="row full-height">
            <div className="container full-height">
              <div className="row full-height">
                <div className="col-sm-12 full-height">
                  <div className="nav-small-content-wrapper">
                    <h3>Navigation</h3>
                    <nav className="social-networks">
                      <a className="github"><li><img src="http://placehold.it/30x30" alt="GitHub" /></li></a>
                      <a className="twitter"><li><img src="http://placehold.it/30x30" alt="Twitter" /></li></a>
                      <a className="linkedin"><li><img src="http://placehold.it/30x30" alt="LinkedIn" /></li></a>
                    </nav>
                    <nav className="navigation">
                      <a className="home" href="#home"><li>Home</li></a>
                      <a className="about" href="#about"><li>About</li></a>
                      <a className="portfolio" href="#portfolio"><li>Portfolio</li></a>
                      <a className="contact" href="#contact"><li>Contact</li></a>
                      <div className="h-rule"></div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  		</div>
  	)
  }
}



export default Header;
