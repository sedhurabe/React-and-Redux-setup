import React, { Component } from 'react';
import RegistrationForm from './Form';
//import { createUserAction } from '../../actions/login';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(data){
		// this.props.createUserAction(data).then(res => {
		// 	this.context.router.history.push('/landing');
		// })
	}

	render() {
		return <div className="text-center">
			<div id="signup-form" className="section middle-wrapper">
	        <div className="container">
	            <h1>Registration</h1>
	            <RegistrationForm handleSubmit={this.handleSubmit} />
	        </div>
	    </div>
    </div>
	}
};


// LogIn.propTypes = {
//   loginUserAction: PropTypes.func.isRequired,
// };

SignUp.contextTypes = {
  router: PropTypes.object.isRequired
};

//export default connect(null, { loginUserAction })(LogIn);

export default SignUp;

