import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioContent from '../assets/portfolio-content.json';


class Portfolio extends Component {
  render() {
		return (
			<div id="portfolio" className="portfolio">
				<div className="container-fluid full-height">
					<div className="row full-height">
				 		<div className="col-xs-12 portfolio-section-title">
              <h2 className="text-center">Portfolio</h2>
              <div className="header-underscore center"></div>
				 		</div>
            {
              PortfolioContent.portfolioItems.map((item, index) => {
                return <PortfolioItem idName={'item' + index} key={index} data={item} />
              })
            }
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default Portfolio;
