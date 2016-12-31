import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';



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
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/#about"><li>About</li></Link>
                    <Link to="/#portfolio"><li>Portfolio</li></Link>
                    <Link to="/#contact"><li>Contact</li></Link>
                  </nav>
                </div>
                <div className="col-xs-12 col-sm-3 social-links">
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
}



export default Footer;
