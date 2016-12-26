import React, { Component } from 'react';
import $ from 'jquery';


class AnimatedButton extends Component {

  constructor(props) {
		super(props);

		this.addRubberBandAnimation     = this.addRubberBandAnimation.bind(this)
    this.removeRubberBandAnimation  = this.removeRubberBandAnimation.bind(this)
	}

  addRubberBandAnimation() {
    $('#' + this.props.idName).addClass('animated pulse')
  }

  removeRubberBandAnimation() {
    $('#' + this.props.idName).removeClass('animated pulse')
  }



  render() {
		return (
			<button id={this.props.idName}
              className={this.props.classList}
              onMouseEnter={this.addRubberBandAnimation}
              onMouseLeave={this.removeRubberBandAnimation}>
              {this.props.text}
      </button>
		);
  }
}

export default AnimatedButton;
