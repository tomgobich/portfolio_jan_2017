import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import HeaderContent from './HeaderContent';
import Hero from './Hero';

class App extends Component {

	render() {
		return (
			<div>
				<Header><HeaderContent /></Header>
				<SectionsContainer>
					<Section><Hero /></Section>
				</SectionsContainer>
			</div>
		);
	}
}

export default App;
