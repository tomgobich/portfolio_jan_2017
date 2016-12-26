import React, { Component } from 'react';


class Portfolio extends Component {

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
			<div className="portfolio">
				<div className="container-fluid full-height">
					<div className="row full-height">
				 		<div className="col-xs-12">
              <h2 className="text-center">Portfolio</h2>
              <div className="header-underscore center"></div>
				 		</div>
            <div className="col-xs-12 col-sm-6 col-lg-4 portfolio-item">
              <div className="portfolio-image-wrapper">
                <div className="portfolio-content-wrapper">
                  <div className="portfolio-content">
                    <h3>Work Example Title</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                </div>
                <div className="dev-icons">
                  <i className="devicon-html5-plain-wordmark"></i>      {/* HTML5 */}
                  <i className="devicon-css3-plain-wordmark"></i>       {/* CSS3 */}
                  <i className="devicon-sass-original"></i>             {/* SASS */}
                  <i className="devicon-bootstrap-plain-wordmark"></i>  {/* Bootstrap */}
                  <i className="devicon-javascript-plain"></i>          {/* JavaScript */}
                  <i className="devicon-angularjs-plain"></i>           {/* AngularJS */}
                  <i className="devicon-nodejs-plain"></i>              {/* NodeJS */}
                  <i className="devicon-mongodb-plain-wordmark"></i>    {/* MongoDB */}
                </div>
                <img className="portfolio-image" src="http://placehold.it/400x300" alt="Image" />
              </div>
            </div>
			 		</div>
		 		</div>
			</div>
		);
  }
}

export default Portfolio;
