import React from 'react'
// TODO - add proptypes


class Home extends React.Component {
constructor() {
	super()
	this.state = {
		user: this.props.user
	}

	//Bind functions here

} //close constructor


	if (this.state.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	)




