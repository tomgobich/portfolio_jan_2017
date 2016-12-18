import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import HeaderContent from './HeaderContent';
import Hero from './Hero';

class App extends Component {

	render() {

		let options = {
			activeClass:          	'active', // the class that is appended to the sections links
			anchors:              	['home', 'about'], // the anchors for each sections
			arrowNavigation:      	true, // use arrow keys
			className:            	'SectionContainer', // the class name for the section container
			delay:                	1000, // the scroll animation speed
			navigation:          	true, // use dots navigatio
			navigationTooltips: 		['Home', 'About'],
        	showActiveTooltip: 		true,
			scrollBar:            	false, // use the browser default scrollbar
			sectionClassName:     	'Section', // the section class name
			sectionPaddingTop:    	'0', // the section top padding
			sectionPaddingBottom: 	'0', // the section bottom padding
			verticalAlign:        	false // align the content of each section vertical
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
