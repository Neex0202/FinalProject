import React from 'react';
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
					<div className="col s4 right-align">
						<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
					</div>
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