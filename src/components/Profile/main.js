import React from 'react';
// import helper from '../util/helper';
import Profile from './profile'
import Header from './header';
import Background from './background';


class Main extends React.Component {
	constructor(){
		super()
		this.state ={
			background: ""
		}//close state
	}//close constructor


handleBackgroundChange = (pattern) => {
	this.setState({
		background: pattern
	})
}//close hBGC


	render(){

		return(
      <div>
        <Header handleBackgroundChange={this.handleBackgroundChange}
        background={this.state.background}/>
        <Background handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
			bio={this.props.bio} skills={this.props.skills} portfolio={this.props.portfolio} friends={this.props.friends}
			location={this.props.location}
			background={this.state.background}
			/>
      </div>

		);
	}
};

export default Main
