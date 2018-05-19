import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validator from 'validator';

class LogInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username:"",
            password:""
		}

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        var valid = true;  
        if(validator.isEmail(username) === false) {
           alert('Please enter your username or vaild email Id');
            valid = false;
            return false;
        }

        if(validator.isEmpty(password) === true) {
            alert('Please enter your password',);
            valid = false;
            return false;
        }
        if(valid) {
            this.props.handleSubmit(this.state);
        }
    }
	
	render() {
        const { username, password } = this.state;
        return <div className="middle-content col-xs-6">
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-row">
                    <input type="text" className="textbox" name="username" value={username} onChange={this.handleChange} placeholder="Please enter your username / EmailId" />
                </div>
                <div className="form-row">
                    <input type="password" className="textbox" name="password" value={password} onChange={this.handleChange} placeholder="Please enter your password" />
                </div>
                <div className="form-row">
                    <button type="submit" className="button button-fulid">Submit</button>
                </div>
            </form>
            <div className="clearfix sign-content">
                <div className="fL"><Link to="/">Forgotten password?</Link></div>
                <div className="fR">Need an account? <Link to="/registration">Sign Up</Link></div>
            </div>
        </div>
	}
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LogInForm;
