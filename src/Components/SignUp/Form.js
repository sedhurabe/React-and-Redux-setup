import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { map } from 'lodash';

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
            role:"",
            mobileNo:"",
            emailId:"",
            designation:"",
            roleList: ["Admin", "Teacher"],
            listShow:false
		}

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.listChange = this.listChange.bind(this);
        this.listClick = this.listClick.bind(this);
	}

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    listChange(el){
        this.setState({
            role: el,
            listShow: false
        });
    }

    listClick(role){
        if(this.state.role === role){
             this.setState({
                listShow: true
            })
        }
    }

    onSubmit(e){
        e.preventDefault();
        const { name, role, mobileNo, emailId, designation } = this.state;
        var valid = true; 

        if(validator.isEmpty(name) === true) {
            alert('Please enter your name',);
            valid = false;
            return false;
        }

        if(validator.isEmpty(role) === true) {
            alert('Please enter your role',);
            valid = false;
            return false;
        }
        
        if(validator.isEmpty(mobileNo) === true && validator.isNumeric(mobileNo) === false) {
            alert('Please enter your vaild mobileNo',);
            valid = false;
            return false;
        }

        if(validator.isEmail(emailId) === false) {
           alert('Please enter your valid email Id');
            valid = false;
            return false;
        }

        if(validator.isEmpty(designation) === true) {
            alert('Please enter your designation',);
            valid = false;
            return false;
        }
        if(valid) {
            this.props.handleSubmit(this.state);
        }
    }
	
	render() {
        const { name, role, mobileNo, emailId, designation, roleList, listShow } = this.state;
        const list = map(roleList, (el,i) =>{
            return <li id={i} key={i} onClick={this.listChange.bind(this, el)}>
                {el}
            </li>
        });
        return <div className="middle-content col-xs-6">
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-row">
                    <input type="text" className="textbox" name="name" value={name} onChange={this.handleChange} placeholder="Please enter your name" />
                </div>
                <div className="form-row">
                    <input type="text" className="textbox" name="role" value={role} onClick={this.listClick.bind(this, role)} placeholder="Please enter your role" readOnly />
                    {listShow === true ? <ul className={`slelectMenu ${listShow === true? 'active': ""}`}>
                        {list}
                    </ul>:""}
                </div>
                <div className="form-row">
                    <input type="number" className="textbox" name="mobileNo" value={mobileNo} onChange={this.handleChange} placeholder="Please enter your mobile number" />
                </div>
                <div className="form-row">
                    <input type="email" className="textbox" name="emailId" value={emailId} onChange={this.handleChange} placeholder="Please enter your emailId" />
                </div>
                <div className="form-row">
                    <input type="text" className="textbox" name="designation" value={designation} onChange={this.handleChange} placeholder="Please enter your designation" />
                </div>
                <div className="form-row">
                    <button type="submit" className="button button-fulid">Submit</button>
                </div>
            </form>
        </div>
	}
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
