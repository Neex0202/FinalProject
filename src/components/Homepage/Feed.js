import React from 'react';
import helper from '../../util/helper';
import { Button, Modal, Chip } from 'react-materialize';

import Welcome from './Welcome';
import Tech from './Tech';
import Network from './Network';
import Companies from './Companies';



class Feed extends React.Component {

	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Welcome />
				<Tech />
				<Network />
				<Companies />
			</div>

		);
	}
};


export default Feed;


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
 // ALL THE JS THAT IS NOT ESSENTIAL FOR MY FRONT-END RIGHT NOW IS BELOW \\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

// 	constructor() {
// 		super();

// 		this.state ={
// 			proPic: null,
// 			name: null,
// 			bio: null,
// 			location: null,
// 			skills: null,
// 			porfolio: [],
// 			collabs: [null]
			

// 		};

// 		this.getDevName = this.state.getDevName.bind(this)
// 	} //Close Constructor


// 	//CALLING HELPER FUNCTIONS HERE OR IN GRANDPARENT (MAIN.JS)
// componentDidMount(){
// console.log("Component Mounted!!!");
// //GET DEV NAME REQUEST
// helpers.getDevName().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// //GET DEV PIC REQUEST
// helpers.getDevPicture().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});


// //GET DEV BIO REQUEST
// helpers.getDevBio().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// //GET DEV LOC REQUEST
// helpers.getDevLocation().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// }


// }

// //or Declare GET FUNCTIONS HERE AND PASS TO CHILDREN

// helpers.getDevName = event => {
// 	this.setState({name: this.state.name???})
// }

// helpers.getDevPicture = event => {
// 	this.setState({picture: this.state.name???})
// }

// helpers.getDevBio = event => {
// 	this.setState({bio: this.state.name???})
// }

// helpers.getDevLocation = event => {
// 	this.setState({location: this.state.name???})
// }

// 	render(){
// 		return (
// 			<Intro
// 			getDevName= {this.getDevName}
// 			getDevPicture= {this.getDevName}
// 			getDevBio= {this.getDevName}
// 			getDevLocation= {this.getDevName}
// 			/>
// 			<Skills />
// 			<Portfolio />
// 			<Network />
// 			<Contact />
// 			)//Close Return
// 	}//Close Render




