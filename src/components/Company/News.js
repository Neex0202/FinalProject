import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Skills extends React.Component {

	render() {
		return (

			<div>

				<div className="row">
					<div className="col s8 left-align">
						<h5><strong> LATEST COMPANY NEWS </strong></h5>
					</div>
					<div className="col s4 right-align">
					</div>
				</div>

				<a href="#">
					<div className="row company-news">
						<h6>- Global Data Company LLC announces expansion of NYC offices, hiring a total of fifty new employees...</h6>
					</div>
				</a>

				<a href="#">
					<div className="row company-news">
						<h6>- JD Power and Associates gives their "Best Customer Service Award" to Global Data Company LLC...</h6>
					</div>
				</a>

				<a href="#">
					<div className="row company-news">
						<h6>- It's been over three decades and they're still changing! The CEO of Global Data Company explains why...</h6>
					</div>
				</a>


				<hr />
				<br />
			</div>

		);
	}
};
	
export default Skills;