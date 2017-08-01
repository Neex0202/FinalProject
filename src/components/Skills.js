import React from 'react';
import {Button, Modal} from 'react-materialize';
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
						<Modal
								header='Add/Edit Skills'
								fixedFooter
								trigger={
									<div className="col s4 right-align">
										<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
									</div>
									
								}> 
								<p><strong>ADD A SKILL NAME AND INPUT YOUR EFFICIENCY IN THAT SKILL</strong></p>


								<div className="row">
							    <form className="col s12">

							      <div className="row">
							      	{/* FIRST NAME FIELD */}
							        <div className="input-field col s2">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Skill Name</label>
							        </div>
							        {/* END  FIRST NAME FIELD */}

							        {/* LAST NAME FIELD */}
							        <div className="input-field col s6">
							          <input id="last_name" type="text" className="validate" />
							          <label for="last_name">Last Name</label>
							        </div>
							        {/* END LAST NAME FIELD */}
							      </div>

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large waves-effect waves-light" type="submit" name="action">
												Submit
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}

							    </form>	
								</div>


						</Modal>
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