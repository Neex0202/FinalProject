import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Intro extends React.Component {

	render() {
		return(

			<div>

				<div className="row">
					<img src="assets/img/company-logo.png" alt="" className="responsive-img" />
				</div>

				<div className="row center-align">
					<h4><strong>Global Data Company LLC</strong></h4>
					<h5 className="profile-bio"><strong>New York City / London / Tokyo</strong></h5>
					<p className="profile-bio"><strong>Global Data Company is proud to be a leading
					company in the highly demanding field of Data Analytics. Started over 30 years ago,
					our company continues to grow each and every year as end users are creating more 
					data on a daily basis than ever before in human history. What to do with all of this
					information can seem like a truly daunting task, but we take pride in digging through 
					the data and crunching the numbers to find Key Insights that help our clients run their 
					businesses much more efficiently. Our mission is to make simple user interfaces for our
					clients to have easy access to thier data and the knowledge gained from it. </strong></p>
				</div>				

				<hr />
				<br />
			</div>

		);
	}
};

export default Intro;