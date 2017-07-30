import React from 'react';
import helper from '../util/helper';


class Intro extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROFILE PIC */}
					<div className="col s4 center-align">
						<img src="assets/img/user-placeholder.jpg" alt="" className="circle responsive-img profile-pic z-depth-2" />
					</div>
					{/* END PROFILE PIC* /}

					{/* PROFILE INFO */}
					<div className="col s8">
					<br />
						<div className="row">
							{/* USER NAME */}
							<div className="col s8 left-align">
								<h4 className="username">First Lastname</h4>
							</div>
							{/* END USER NAME */}

							{/* EDIT ICON */}
							<div className="col s4 right-align">
								<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
							</div>
						{/* END EDIT ICON */}
						</div>

						<div className="row">
							{/* USER BIO */}
							<p className="profile-bio">Full Stack Web Developer with a passion for technology and a love of 
							coding. Dedicated to adapting and learning new languages and frameworks with disciplines in 
							HTML5, CSS3, JavaScript, jQuery, Node, SQL, and MongoDB. A natural knack for Front-End design 
							with an artistic approach and an eye for detail. Familiar with Front-End framworks like 
							Bootstrap, Materialize, React, Angular, and more.</p>
						{/* END USER BIO */}
						</div>
					</div>
					{/* END PROFILE INFO */}		
				</div>

				<hr />
				<br />
			</div>

		);
	}
};

export default Intro;

  //~~~~~~~~~~~~~~~~~~~~~~~~~~\\
 // NON ESSENTIAL FRONT-END JS \\
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

//   constructor(){
//   super();

//   // Child has a state that follows the number of clicks
//   this.state = {
//     pic: null,
//     name: null,
//     location: null,
//     bio: null
//   };
// } //close Constructor

