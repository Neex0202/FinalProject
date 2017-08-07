import React from 'react';
import helper from '../../util/helper';
import { Button, Modal, Chip } from 'react-materialize';

import Intro from './Intro';
import News from './News';
import Photos from './Photos';
import Employees from './Employees';
import Contact from './Contact';



class Profile extends React.Component {

	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Intro />
				<News />
				<Photos />
				<Employees />
				<Contact />
			</div>

		);
	}
};


export default Profile;