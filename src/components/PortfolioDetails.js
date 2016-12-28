import React, { Component } from 'react';
import Header from './Header.js';
import AnimatedButton from './AnimatedButton';
import PortfolioContent from '../assets/portfolio-content.json';

class App extends Component {

	render() {

    let portfolioID = this.props.params.portfolioID,
        portfolioItem = PortfolioContent.portfolioItems.filter(item => item.id === portfolioID ),
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
                  <AnimatedButton idName="btnVisitLive" classList="btn btn-primary" text="View Live" />
                  <AnimatedButton idName="btnVisitGitHub" classList="btn btn-default" text="View Repo" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">

              <div className="col-xs-12 col-sm-6 col-sm-push-6 col-md-5 col-md-push-7 col-lg-4 col-lg-push-7 details">
                <div className="detail-section">
                  <h3>About</h3>
                  <div className="header-underscore"></div>
                  <p className="text-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="detail-section">
                  <h3>Technologies</h3>
                  <div className="header-underscore"></div>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3 / SCSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>AngularJS 1.x</li>
                    <li>NodeJS / Express</li>
                    <li>MongoDB / Mongoose</li>
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>Main Involvement</h3>
                  <div className="header-underscore"></div>
                  <ul>
                    <li>Administrator Panel</li>
                    <li>Billboard Poll View</li>
                    <li>NodeJS Integration</li>
                    <li>Login functionality with Satellizer</li>
                    <li>MongoDB Integration</li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 col-md-7 col-md-pull-5 col-lg-6 col-lg-pull-4 col-lg-offset-1">
                <img className="image-onehundred" src="http://placehold.it/600x600" alt="Title Goes Here" />
              </div>

            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default App;
