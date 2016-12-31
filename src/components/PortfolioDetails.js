import React, { Component } from 'react';
import Header from './Header.js';
import AnimatedButton from './AnimatedButton';
import PortfolioContent from '../assets/portfolio-content.json';

class PortfolioDetails extends Component {

  renderAbout(details) {
    if(details.hasOwnProperty('fullBio'))
    {
      return (
        <div className="detail-section">
          <h3>About</h3>
          <div className="header-underscore"></div>
          {
            details.fullBio.map(bio => <p key={bio} className="text-block">{bio}</p>)
          }
        </div>
      )
    }
  }

  renderTechnologies(details) {
    if(details.hasOwnProperty('technologies'))
    {
      return (
        <div className="detail-section">
          <h3>Technologies</h3>
          <div className="header-underscore"></div>
          <ul>
            {
              details.technologies.map(tech => <li key={tech}>{tech}</li>)
            }
          </ul>
        </div>
      )
    }
  }

  renderInvolvement(details) {
    if(details.hasOwnProperty('involvement'))
    {
      return (
        <div className="detail-section">
          <h3>Main Involvement</h3>
          <div className="header-underscore"></div>
          <ul>
            {
              details.involvement.map(involvement => <li key={involvement}>{involvement}</li>)
            }
          </ul>
        </div>
      )
    }
  }

	render() {

    let portfolioID = this.props.params.portfolioID,
        portfolioItem = PortfolioContent.portfolioItems.filter(item => item.id === portfolioID),
        details = portfolioItem[0];

		return (
			<div>
        <Header />
        <div className="portfolio-item-details">
          <div className="container-fluid title-bar">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-9 col-lg-7 col-lg-offset-1">
                <h1 className="portfolio-title">{details.title}</h1>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="cta-wrapper">
                  <a href="" target="_blank"><AnimatedButton idName="btnVisitLive" classList="btn btn-primary" text="View Live" /></a>
                  <a href="" target="_blank"><AnimatedButton idName="btnVisitGitHub" classList="btn btn-default" text="View Repo" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">

              <div className="col-xs-12 col-sm-6 col-sm-push-6 col-md-5 col-md-push-7 col-lg-4 col-lg-push-7 details">
                {this.renderAbout(details)}
                {this.renderTechnologies(details)}
                {this.renderInvolvement(details)}
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 col-md-7 col-md-pull-5 col-lg-6 col-lg-pull-4 col-lg-offset-1">
                {
                  details.fullImages.map(image => <img key={image} className="image-onehundred portfolio-image" src={'../../images/' + image} alt={details.title} />)
                }
                <p>Placeholder images</p>
              </div>

            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default PortfolioDetails;
