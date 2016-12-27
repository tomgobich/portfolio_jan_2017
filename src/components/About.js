import React, { Component } from 'react';


class About extends Component {

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
			<div className="about">
				<div className="container-fluid full-height">
					<div className="row full-height">
				 		<div className="col-xs-12 col-sm-7 col-lg-6 col-lg-offset-1 about-me">
              <h2>About Me</h2>
              <div className="header-underscore"></div>
              <p className="text-block">
                Hey there, nice to meet you! My name is Tom Gobich, I'm a Front-End Developer and a graduate from The Iron Yard Cincinnati.
                I'm a driven, family-oriented, person who looks at obsticales and difficulties as opportunities to learn and grow.
                I have educational knowledge ranging from design to Back-End technologies - but I specialize in Front-End Development.
              </p>
              <p className="text-block">
                Ever since I was a kid I've had a love for puzzles and building. I'd even take things apart to see how they were
                put together, though, more often than not they didn't go back the way they came.
                Ultimately, this led me to development where I get to enjoy the best of both worlds.
                When I'm not coding you'll likely find me spending time with family, reading documentation, watching tutorials,
                playing Battlefield or Sudoku, or learning about the latest and greatest in technology.
              </p>
				 		</div>
            <div className="col-xs-12 col-sm-5 col-lg-4 education">
              <h2>Education</h2>
              <div id="educationHeaderUnderscore" className="header-underscore right"></div>
              <div className="education-wrapper">
                <div className="content tiy">
                  <h4>The Iron Yard Cincinnati</h4>
                  <h5>Front-End Engineering with JavaScript and MVC Frameworks</h5>
                  <p>Graduated Fall 2016</p>
                </div>
                <div className="content cstate">
                  <h4>Cincinnati State</h4>
                  <h5>Computer Programming and Systems Analysis</h5>
                  <p>_ Courses Completed, 2014 - 2016</p>
                </div>
                <div className="content cstate">
                  <h4>Cincinnati State</h4>
                  <h5>Web and Multimedia Design</h5>
                  <p>_ Courses Completed, 2012 - 2014</p>
                </div>
              </div>
				 		</div>
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default About;
