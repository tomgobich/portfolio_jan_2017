import React, { Component } from 'react';
import PortfolioContent from '../assets/portfolio-content.json';

class App extends Component {

	render() {

    let portfolioID = this.props.params.portfolioID,
        portfolioItem = PortfolioContent.portfolioItems.filter(item => item.id === portfolioID ),
        details = portfolioItem[0];

		return (
			<div>
				{details.title}
			</div>
		);
	}
}

export default App;
