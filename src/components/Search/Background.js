import React from 'react';
import helper from '../../util/helper';
import { Button, Modal, Chip } from 'react-materialize';

import Results from './Results';

class Background extends React.Component { 

	render() {
		return (

			<div id="pattern_6">

				{/* TOP MARGIN */}
				<div className="row">
					<br /><br />
				</div>
				{/* END TOP MARGIN */}


				{/* CONTENT ROW */}
				<div className="row">

					{/* SIDE MARGIN */}
					<div className="col s2">
					</div>
					{/* END SIDE MARGIN */}


					<Results />


					{/* SIDE MARGIN */}
					<div className="col s2">
					</div>
					{/* END SIDE MARGIN */}

				</div>
				{/* END CONTENT ROW */}

				{/* BOTTOM MARGIN */}
				<div className="row">
					<br /><br /><br /><br />
				</div>
				{/* END BOTTOM MARGIN */}
			</div>

		);
	}
};
	
export default Background;