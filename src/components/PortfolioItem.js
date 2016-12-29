import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <Link to={`/portfolio/${this.props.data.id}`}>
          <div className="portfolio-item-wrapper" onMouseEnter={this.addAnimation} onMouseLeave={this.removeAnimation}>
            <img className="portfolio-image" src={'images/' + this.props.data.featuredImage} alt={this.props.data.title} />
            <div id={this.props.idName} className="portfolio-item-overlay animated">
              <div className="portfolio-item-content animated">
                <div className="portfolio-item-content-center">
                  <h3>{this.props.data.title}</h3>
                  <div className="header-underscore white"></div>
                  <div className="dev-icons">
                    {
                      this.props.data.devicons.map((icon, index) => {
                        return <i key={index} className={icon}></i>
                      })
                    }
                  </div>
                  <p>{this.props.data.featuredBio}</p>
                </div>
              </div>
              <div className="portfolio-item-overlay-gradient animated"></div>
            </div>
          </div>
        </Link>
      </div>
		);
  }
}

PortfolioItem.contextTypes = {
	router: React.PropTypes.object
}

export default PortfolioItem;
