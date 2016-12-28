import React, { Component } from 'react';
import Header from './Header.js';
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
          <div className="container-fluid">
            <div id="portfolioHeader" className="portfolio-header">
              <div className="row">
                <div className="col-xs-12">
                  <h1 className="portfolio-title">{details.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default App;
