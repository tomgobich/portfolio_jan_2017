import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Isvg from 'react-inlinesvg';
import GitHub from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';



class Footer extends Component {

  getYear() {
    let date = new Date;
    return date.getFullYear();
  }

  render() {
  	return (
  		<div id="footer" className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-lg-10 col-lg-offset-1">
              <div className="row">
                <div className="col-xs-12 col-sm-3 copyright">
                  <p>&copy; {this.getYear()} Tom Gobich</p>
                </div>
                <div className="col-xs-12 col-sm-6 site-links">
                  <nav className="site-navigation">
                    <a href="http://tomgobich.com/"><li>Home</li></a>
                    <a href="http://tomgobich.com/#about"><li>About</li></a>
                    <a href="http://tomgobich.com/#portfolio"><li>Portfolio</li></a>
                    <a href="http://tomgobich.com/#contact"><li>Contact</li></a>
                  </nav>
                </div>
                <div className="col-xs-12 col-sm-3 social-links">
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
            </div>
          </div>
        </div>
  		</div>
  	)
  }
}



export default Footer;
