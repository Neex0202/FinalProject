import React from 'react';

// import child componenents

import Header from './Header';

// import helpers from '../utils/helpers';


class Main extends React.Component {
	render(){
		return(


	<div className="container">
	<Header />
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Login Form</h2>
        <form className="login">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
        <br />
        <p>Or sign up <a href="/">here</a></p>
      </div>
    </div>

    <Profile />
  </div>

			)//close return
	}//close render
};//close Main component

export default Main