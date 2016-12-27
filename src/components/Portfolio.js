import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';


class Portfolio extends Component {

	// constructor(props) {
	// 	super(props);
  //
	// 	// Initial state
	// 	this.state = {
  //
	// 	};
	// }

  render() {
		return (
			<div className="portfolio">
				<div className="container-fluid full-height">
					<div className="row full-height">
				 		<div className="col-xs-12">
              <h2 className="text-center">Portfolio</h2>
              <div className="header-underscore center"></div>
				 		</div>
            <PortfolioItem idName="item1" />
            <PortfolioItem idName="item2" />
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default Portfolio;
