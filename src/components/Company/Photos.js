import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Photos extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROJECT SECTION TITLE */}
					<div className="col s8 left-align">
						<h5><strong>COMPANY PHOTOS</strong></h5>
					</div>
					{/* END PROJECT SECTION TITLE */}

					{/* EDIT ICON */}
					<div className="col s4 right-align">

					</div>
					{/* END EDIT ICON */}

				</div>

				<div className="row">
					{/* PROJECT DIV */}
					<div className="col s4 company-img">
						<img src="https://officesnapshots.com/wp-content/uploads/2012/08/astral_271011_01-940x703-700x524.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4 company-img">
						<img src="https://beakon.com.au/wp-content/uploads/2017/05/instacart-office-design-10.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4 company-img">
						<img src="https://highfive.com/wp-content/uploads/2016/05/E1A10388.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
					</div>
					{/* END PROJECT DIV */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Photos;