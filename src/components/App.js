import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import HeaderContent from './HeaderContent';
import Hero from './Hero';

class App extends Component {

	render() {

		let options = {
			activeClass:          	'active',
			anchors:              	['home', 'about'],
			arrowNavigation:      	true,
			className:            	'SectionContainer',
			delay:                	1000,
			navigation:          	true,
			scrollBar:            	false,
			sectionClassName:     	'Section',
			sectionPaddingTop:    	'0',
			sectionPaddingBottom: 	'0',
			verticalAlign:        	false
		};

		return (
			<div>
				<Header><HeaderContent /></Header>
				<SectionsContainer {...options}>
					<Section><Hero /></Section>
					<Section><h1>Testing Section 2</h1></Section>
				</SectionsContainer>
			</div>
		);
	}
}

export default App;
