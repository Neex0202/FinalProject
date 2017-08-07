import React from 'react';
import helper from '../../util/helper';
import { Button, Modal, Chip } from 'react-materialize';

import Search from './Search';
import Companies from './Companies';



class Results extends React.Component {

	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Search />
				<Companies />
			</div>

		);
	}
};


export default Results;