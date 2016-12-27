import React, { Component } from 'react';
import $ from 'jquery';


class PortfolioItem extends Component {

  constructor(props) {
		super(props);

		this.addAnimation     = this.addAnimation.bind(this)
    this.removeAnimation  = this.removeAnimation.bind(this)
	}

  addAnimation() {
    let $portfolioItem = $('#' + this.props.idName)
    $portfolioItem.show(0)
    $portfolioItem.children('.portfolio-item-overlay-gradient').removeClass('fadeOut').addClass('fadeIn')
    $portfolioItem.children('.portfolio-item-content').removeClass('fadeOutDown').addClass('fadeInDown')
  }

  removeAnimation() {
    let $portfolioItem = $('#' + this.props.idName)
    $portfolioItem.children('.portfolio-item-overlay-gradient').removeClass('fadeIn').addClass('fadeOut')
    $portfolioItem.children('.portfolio-item-content').removeClass('fadeInDown').addClass('fadeOutDown')
    $portfolioItem.delay(700).hide(0)
  }



  render() {
		return (
			<div className="col-xs-12 col-sm-6 col-lg-4 portfolio-item">
        <div className="portfolio-item-wrapper" onMouseEnter={this.addAnimation} onMouseLeave={this.removeAnimation}>
          <img className="portfolio-image" src="http://placehold.it/400x275" />
          <div id={this.props.idName} className="portfolio-item-overlay animated">
            <div className="portfolio-item-content animated">
              <div className="portfolio-item-content-center">
                <h3>Work Example Title</h3>
                <div className="header-underscore white"></div>
                <div className="dev-icons">
                  <i className="devicon-html5-plain-wordmark"></i>      {/* HTML5 */}
                  <i className="devicon-css3-plain-wordmark"></i>       {/* CSS3 */}
                  <i className="devicon-sass-original"></i>             {/* SASS */}
                  <i className="devicon-bootstrap-plain-wordmark"></i>  {/* Bootstrap */}
                  <i className="devicon-javascript-plain"></i>          {/* JavaScript */}
                  <i className="devicon-angularjs-plain"></i>           {/* AngularJS */}
                  <i className="devicon-nodejs-plain"></i>              {/* NodeJS */}
                  <i className="devicon-mongodb-plain-wordmark"></i>    {/* MongoDB */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
            <div className="portfolio-item-overlay-gradient animated"></div>
          </div>
        </div>
      </div>
		);
  }
}

export default PortfolioItem;
