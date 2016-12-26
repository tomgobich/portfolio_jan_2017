import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';

class App extends Component {

	render() {

		return (
			<div>
				<Header />
				<Hero />
        <About />
        <Portfolio />
			</div>
		);
	}
}

export default App;
