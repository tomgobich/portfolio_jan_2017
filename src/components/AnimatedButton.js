import React, { Component } from 'react';
import $ from 'jquery';


class AnimatedButton extends Component {

  constructor(props) {
		super(props);

		this.addAnimation     = this.addAnimation.bind(this)
    this.removeAnimation  = this.removeAnimation.bind(this)
	}

  addAnimation() {
    $('#' + this.props.idName).addClass('animated pulse')
  }

  removeAnimation() {
    $('#' + this.props.idName).removeClass('animated pulse')
  }



  render() {
		return (
			<button id={this.props.idName}
              className={this.props.classList}
              onMouseEnter={this.addAnimation}
              onMouseLeave={this.removeAnimation}>
              {this.props.text}
      </button>
		);
  }
}

export default AnimatedButton;
