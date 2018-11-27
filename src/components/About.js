import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import $ from 'jquery';


class About extends Component {

  toggleVisibility(element) {
    let $oldElement  = $('.dropdown-active')
    let $element     = $(element)

    if($oldElement.attr('id') !== $element.attr('id'))
    {
      $oldElement.removeClass('dropdown-active')
      $oldElement.siblings('.listing').children('.chevron').removeClass('mif-expand-more').addClass('mif-chevron-right')
    }

    $element.toggleClass('dropdown-active')
    $element.siblings('.listing').children('.chevron').toggleClass('mif-chevron-right').toggleClass('mif-expand-more')
  }

  render() {
		return (
			<div id="about" className="about nav-section">
				<div className="container-fluid">
					<div className="row">
				 		<div className="col-xs-12 col-sm-7 col-lg-6 col-lg-offset-1 about-me">
              <h2>About</h2>
              <div className="header-underscore"></div>
              <p className="text-block">
                Hey there, nice to meet you! My name is Tom Gobich, I'm a Front-End Developer and a graduate from The Iron Yard Cincinnati.
                I'm a driven, family-oriented, person who looks at obstacles and difficulties as opportunities to learn and grow.
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
              <div className="right-align-underscore">
                <div id="educationHeaderUnderscore" className="header-underscore right"></div>
              </div>
              <div className="education-wrapper">
                <div id="contentTIY" className="content tiy" onClick={() => this.toggleVisibility('#dropdownTIY')}>
                  <h4>The Iron Yard Cincinnati</h4>
                  <h5>Front-End Engineering, Graduated Fall 2016</h5>
                  <p className="listing"><span className="chevron mif-chevron-right"></span>JavaScript, AngularJS, NodeJS, and 9 more</p>
                  <div id="dropdownTIY" className="education-dropdown tiy" onClick={() => this.toggleVisibility('#dropdownTIY')}>
                    <h5>Technologies Covered:</h5>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>SCSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>AngularJS 1.x</li>
                      <li>ReactJS</li>
                      <li>NodeJS</li>
                      <li>MongoDB</li>
                      <li>Gulp</li>
                      <li>GIT</li>
                      <li>Trello</li>
                    </ul>
                  </div>
                </div>
                <div className="content cstate cstate1" onClick={() => this.toggleVisibility('#dropdownCState1')}>
                  <h4>Cincinnati State</h4>
                  <h5>Computer Programming and Systems Analysis</h5>
                  <p className="listing"><span className="chevron mif-chevron-right"></span>SQL, VB.NET, and 5 more</p>
                  <div id="dropdownCState1" className="education-dropdown cstate1" onClick={() => this.toggleVisibility('#dropdownCState1')}>
                    <h5>Relevant Coursework:</h5>
                    <ul>
                      <li>Database Design and SQL</li>
                      <li>Visual Basic .NET</li>
                      <li>Business Systems Analysis</li>
                      <li>PHP and MySQL</li>
                      <li>Java Programming</li>
                      <li>ASP.NET C# WEb Development</li>
                      <li>C Programming</li>
                    </ul>
                  </div>
                </div>
                <div className="content cstate cstate2" onClick={() => this.toggleVisibility('#dropdownCState2')}>
                  <h4>Cincinnati State</h4>
                  <h5>Web and Multimedia Design</h5>
                  <p className="listing"><span className="chevron mif-chevron-right"></span>Design Principals, UX Design, and 6 more</p>
                  <div id="dropdownCState2" className="education-dropdown cstate2" onClick={() => this.toggleVisibility('#dropdownCState2')}>
                    <h5>Relevant Coursework:</h5>
                    <ul>
                      <li>Design Drawing</li>
                      <li>Design Principals</li>
                      <li>Beginning 2D Graphics</li>
                      <li>Digital Media Concepts</li>
                      <li>Web Development with HTML</li>
                      <li>Web Development with CSS</li>
                      <li>Animated Web Content</li>
                      <li>User Experience Design and Usability</li>
                    </ul>
                  </div>
                </div>
              </div>
				 		</div>
			 		</div>
          <div className="row">
            <div className="col-xs-12 col-lg-10 col-lg-offset-1 skills">
              <h2>Skills</h2>
              <div className="header-underscore center"></div>
              <div className="skills-list">
                <div className="skill"><ReactTooltip id="tooltip-html5" place="bottom" type="dark" effect="float"><span>HTML5</span></ReactTooltip><i data-tip data-for="tooltip-html5" className="devicon-html5-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-css3" place="bottom" type="dark" effect="float"><span>CSS3</span></ReactTooltip><i data-tip data-for="tooltip-css3" className="devicon-css3-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-sass" place="bottom" type="dark" effect="float"><span>Sass</span></ReactTooltip><i data-tip data-for="tooltip-sass" className="devicon-sass-original"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-bootstrap" place="bottom" type="dark" effect="float"><span>Bootstrap</span></ReactTooltip><i data-tip data-for="tooltip-bootstrap" className="devicon-bootstrap-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-javascript" place="bottom" type="dark" effect="float"><span>JavaScript</span></ReactTooltip><i data-tip data-for="tooltip-javascript" className="devicon-javascript-plain"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-angularjs" place="bottom" type="dark" effect="float"><span>AngularJS 1.x</span></ReactTooltip><i data-tip data-for="tooltip-angularjs" className="devicon-angularjs-plain"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-react" place="bottom" type="dark" effect="float"><span>ReactJS</span></ReactTooltip><i data-tip data-for="tooltip-react" className="devicon-react-original-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-nodejs" place="bottom" type="dark" effect="float"><span>NodeJS</span></ReactTooltip><i data-tip data-for="tooltip-nodejs" className="devicon-nodejs-plain"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-mysql" place="bottom" type="dark" effect="float"><span>MySQL</span></ReactTooltip><i data-tip data-for="tooltip-mysql" className="devicon-mysql-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-mongodb" place="bottom" type="dark" effect="float"><span>MongoDB</span></ReactTooltip><i data-tip data-for="tooltip-mongodb" className="devicon-mongodb-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-gulp" place="bottom" type="dark" effect="float"><span>Gulp</span></ReactTooltip><i data-tip data-for="tooltip-gulp" className="devicon-gulp-plain"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-git" place="bottom" type="dark" effect="float"><span>Git</span></ReactTooltip><i data-tip data-for="tooltip-git" className="devicon-git-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-trello" place="bottom" type="dark" effect="float"><span>Trello</span></ReactTooltip><i data-tip data-for="tooltip-trello" className="devicon-trello-plain-wordmark"></i></div>
                <div className="skill"><ReactTooltip id="tooltip-photoshop" place="bottom" type="dark" effect="float"><span>Photoshop</span></ReactTooltip><i data-tip data-for="tooltip-photoshop" className="devicon-photoshop-plain"></i></div>
              </div>
            </div>
          </div>
		 		</div>
			</div>
		);
  }
}

export default About;
