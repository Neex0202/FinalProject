import React from 'react';
import {Button, Modal} from 'react-materialize';
import helper from '../util/helper';


class Projects extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROJECT SECTION TITLE */}
					<div className="col s8 left-align">
						<h5>RECENT PROJECTS</h5>
					</div>
					{/* END PROJECT SECTION TITLE */}

					{/* EDIT ICON */}
					<Modal
							header='Modal Title'
							fixedFooter
							trigger={
								<div className="col s4 right-align">
									<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
								</div>
								
							}> 
							<p>MODAL CONTENT</p>

							<div className="row">
							    <form className="col s12">

							      <div className="row">
							      	{/* FIRST NAME FIELD */}
							        <div className="input-field col s6">
							          <input id="first_name" type="text" className="validate" />
							          <label for="first_name">First Name</label>
							        </div>
							        {/* END  FIRST NAME FIELD */}

							        {/* LAST NAME FIELD */}
							        <div className="input-field col s6">
							          <input id="last_name" type="text" className="validate" />
							          <label for="last_name">Last Name</label>
							        </div>
							        {/* END LAST NAME FIELD */}
							      </div>

										
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

				<div className="row">
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Projects;