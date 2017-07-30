import React from 'react';
import helper from '../util/helper';


class Network extends React.Component {

	render() {
		return (

			<div>
				<div className="row">
					{/* NETWORK SECTION TITLE */}
					<div className="col s8 left-align">
						<h5>NETWORK</h5>
					</div>
					{/* END NETWORK SECTION TITLE */}

					{/* EDIT ICON */}
					<div className="col s4 right-align">
						<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
					</div>
					{/* END EDIT ICON */}
				</div>


				<div className="row">
					{/* LEFT ARROW */}
					<div className="col s1 center-align valign-wrapper">
						<a href="#"><i className="fa fa-chevron-left arrow" aria-hidden="true"></i></a>
					</div>
					{/* END LEFT ARROW */}

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Nico Santa Ana" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Mike Russo" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Joseph Adames" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Jeff Easley" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Varun Asimilli" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Mike Yingling" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Alan Chu" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Franklin Dawes" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="James Dalton" />
					</div>

					<div className="col s1">
						<img src="assets/img/network.jpg" alt="" 
							className="responsive-img z-depth-3" title="Eric Williams" />
					</div>

					{/* RIGHT ARROW */}
					<div className="col s1 center-align valign-wrapper">
							<a href="#"><i className="fa fa-chevron-right arrow" aria-hidden="true"></i></a>
					</div>
					{/* END RIGHT ARROW */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Network;