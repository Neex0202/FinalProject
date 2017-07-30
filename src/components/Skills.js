import React from 'react';
import helper from '../util/helper';


class Skills extends React.Component {

	render() {
		return (

			<div>
				<div>
					<div className="row">
						{/* SKILL SECTION TITLE */}
						<div className="col s8 left-align">
							<h5> SKILLS </h5>
						</div>
						{/* END SKILL SECTION TITLE */}

						{/* EDIT ICON */}
						<div className="col s4 right-align">
							<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
						</div>
						{/* END EDIT ICON */}
					</div>

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>HTML</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-success hundred" role="progressbar" 
							  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">100% Complete (success)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>CSS</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-info ninety-five" role="progressbar" 
							  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">95% Complete</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>JavaScript</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-warning eighty" role="progressbar" 
							  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">80% Complete (warning)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>MongoDB</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-danger sixty" role="progressbar" 
							  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">60% Complete (danger)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Skills;