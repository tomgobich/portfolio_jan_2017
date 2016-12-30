import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {

	render() {

		return (
			<div>
				<Header />
				<Hero />
        <About />
        <Portfolio />
        <Contact />
			</div>
		);
	}
}

export default App;
