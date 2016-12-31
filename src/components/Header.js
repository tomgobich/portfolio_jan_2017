import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Isvg from 'react-inlinesvg';
import Logo from '../images/logo.svg';
import GitHub from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';



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

  componentDidMount() {
    if(window.location.pathname.includes('/portfolio/')) {
      $('.nav-link.active').removeClass('active')
      $('.nav-link.portfolio').addClass('active')
    }
  }

  render() {

    $(document).scroll(function() {
      const cutoff = $(window).scrollTop()
      let $navSection = $('.nav-section')

      $navSection.each(function(){
        let $this = $(this)

        if($this.offset().top + $this.height() > cutoff)
        {
          $navSection.removeClass('current')
          $this.addClass('current')

          let $currentID = $('.current').attr('id')

          $('.nav-link.active').removeClass('active')
          console.log($currentID)
          switch($currentID) {
            case "home":
              $('.nav-link.home').addClass('active')
              break
            case "about":
              $('.nav-link.about').addClass('active')
              break
            case "portfolio":
              $('.nav-link.portfolio').addClass('active')
              break
            case "contact":
              $('.nav-link.contact').addClass('active')
              break
            default:
              break
          }

          return false
        }
      })
    })

  	return (
  		<div>
        <div className="header navbar navbar-default navbar-fixed-top">
    			<div className="container-fluid">
    				<div className="row">
              <div className="col-xs-12 col-lg-10 col-lg-offset-1">
                <div className="row">
        					<div className="col-xs-8 col-md-3">
        						<div className="logo-wrap">
        							<Link to="/">
                        <Isvg src={ Logo }>
          								<img src={ Logo } alt="Tom Gobich ~ Front-End Web Developer" />
          							</Isvg>
        							</Link>
        						</div>
        					</div>
        					<div className="col-xs-4 col-md-9">
        						<div className="row nav-large">
        							<div className="col-md-9">
        								<nav id="menu" className="navigation">
        									<a className="nav-link home" activeClassName="active" href="http://tomgobich.com/"><li>Home</li></a>
        									<a className="nav-link about" data-anchor="about" activeClassName="active" href="http://tomgobich.com/#about"><li>About</li></a>
        									<a className="nav-link portfolio" data-anchor="portfolio" activeClassName="active" href="http://tomgobich.com/#portfolio"><li>Portfolio</li></a>
        									<a className="nav-link contact" data-anchor="contact" activeClassName="active" href="http://tomgobich.com/#contact"><li>Contact</li></a>
        									<div className="h-rule"></div>
        								</nav>
        							</div>
        							<div className="col-md-3">
        								<nav className="social-networks">
                          <a className="github" target="_blank" href="http://github.com/tomgobich">
                            <li>
                              <Isvg src={ GitHub }>
                								<img src={ GitHub } alt="GitHub" />
                							</Isvg>
                            </li>
                          </a>
                          <a className="twitter" target="_blank" href="http://twitter.com/tomgobich">
                            <li>
                              <Isvg src={ Twitter }>
                								<img src={ Twitter } alt="Twitter" />
                							</Isvg>
                            </li>
                          </a>
                          <a className="linkedin" target="_blank" href="http://linkedin.com/in/tomgobich">
                            <li>
                              <Isvg src={ LinkedIn }>
                								<img src={ LinkedIn } alt="LinkedIn" />
                							</Isvg>
                            </li>
                          </a>
        								</nav>
        							</div>
        						</div>
                    <div className="row nav-small">
        							<div className="col-md-9">
                        <span id="menuIcon" className="mif-menu nav-small-menu-icon" onClick={this.toggleNavSmall}></span>
        							</div>
        						</div>
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
                      <a className="github" target="_blank" href="http://github.com/tomgobich">
                        <li>
                          <Isvg src={ GitHub }>
            								<img src={ GitHub } alt="GitHub" />
            							</Isvg>
                        </li>
                      </a>
                      <a className="twitter" target="_blank" href="http://twitter.com/tomgobich">
                        <li>
                          <Isvg src={ Twitter }>
            								<img src={ Twitter } alt="Twitter" />
            							</Isvg>
                        </li>
                      </a>
                      <a className="linkedin" target="_blank" href="http://linkedin.com/in/tomgobich">
                        <li>
                          <Isvg src={ LinkedIn }>
            								<img src={ LinkedIn } alt="LinkedIn" />
            							</Isvg>
                        </li>
                      </a>
                    </nav>
                    <nav className="navigation">
                      <a className="nav-link home" activeClassName="active" href="http://tomgobich.com/"><li>Home</li></a>
                      <a className="nav-link about" data-anchor="about" activeClassName="active" href="http://tomgobich.com/#about"><li>About</li></a>
                      <a className="nav-link portfolio" data-anchor="portfolio" activeClassName="active" href="http://tomgobich.com/#portfolio"><li>Portfolio</li></a>
                      <a className="nav-link contact" data-anchor="contact" activeClassName="active" href="http://tomgobich.com/#contact"><li>Contact</li></a>
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
