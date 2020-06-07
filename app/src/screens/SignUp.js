import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from '../reducers/user-reducer';

class SignUp extends Component{
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: ''
    };

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword1 = this.updatePassword1.bind(this);
    this.updatePassword2 = this.updatePassword2.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.validateSignUpForm = this.validateSignUpForm.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  updateFirstName(event) {
      this.setState({ firstName: event.target.value })
  }
  updateLastName(event) {
      this.setState({ lastName: event.target.value })
  }
  updateEmail(event) {
      this.setState({ email: event.target.value })
  }
  updatePassword1(event) {
      this.setState({ password1: event.target.value })
  }
  updatePassword2(event) {
      this.setState({ password2: event.target.value })
  }
  handleSignUp() {
    if (this.validateSignUpForm()) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password1)
      .then(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          user.updateProfile({
            displayName: `${this.state.firstName} ${this.state.lastName}`
          })
          .then(data => {
            this.props.getUser();
            this.props.history.push('/admin');
          })
          .catch(function(error) {
            console.error(errer);
          });
        }
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode}: ${errorMessage}`);
      });
    }
  }
  validateSignUpForm() {
    // validate first name
    if (!this.state.firstName || !this.validateName(this.state.firstName)) {
      alert('Please enter a valid first name');
      return false;
    }
    // validate last name
    if (!this.state.lastName || !this.validateName(this.state.lastName)) {
      alert('Please enter a valid last name');
      return false;
    }
    // validate email
    if (!this.state.email || !this.validateEmail(this.state.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    // validate password match
    if (this.state.password1 !== this.state.password2) {
      alert('passwords do not match');
      return false;
    }
    // validate password length
    if (!this.state.password1 || !this.validatePassword(this.state.password1)) {
      alert(
        'passwords must be at least 8 characters\n' +
        'passwords must congtain at least 1 upper and lower case letter\n' +
        'passwords must congtain at least 1 special character'
      );
      return false;
    }
    return true;
  }
  validateName(str){
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\0-9?]/g.test(str);
  }
  validateEmail(str){
    return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g.test(str);
  }
  validatePassword(str) {
    const lowerCaseLetters = /[a-z]/g;
    const capitalCaseLetters = /[A-Z]/g;
    const specialCharacters = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g
    const numbers = /[0-9]/g;

    if(!str.match(lowerCaseLetters)) {
      return false;
    }
    if(!str.match(capitalCaseLetters)) {
      return false;
    }
    if(!str.match(specialCharacters)) {
      return false;
    }
    if(!str.match(numbers)) {
      return false;
    }
    if(str.length < 8) {
      return false;
    }
    return true;
  }

   render(){
      return(
         <div id="signup">
            <h1>SignUp</h1>
            <p>Please sign up in to access to request admin dashboard access.</p>
            <form onSubmit={this.handleSignUp}>
              <label className="hidden" htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" value={this.state.firstName} placeholder="First Name" onChange={this.updateFirstName} />
              <label className="hidden" htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name"  value={this.state.lastName} placeholder="Last Name" onChange={this.updateLastName} />
              <label className="hidden" htmlFor="email">E-mail Address</label>
              <input type="email" id="email" value={this.state.email} placeholder="E-Mail Address" onChange={this.updateEmail} />
              <label className="hidden" htmlFor="password1">Password</label>
              <input type="password" id="password1" value={this.state.password1} placeholder="Create a Password" onChange={this.updatePassword1} />
              <label className="hidden" htmlFor="password2">Re-Enter Password</label>
              <input type="password" id="password2" value={this.state.password2} placeholder="Re-Enter Password" onChange={this.updatePassword2} />
              <input type="submit" id="signup" value="Create Account" />
            </form>
            <p>or <Link to="/log-in">Log In</Link> here</p>
         </div>
      );
   }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(null, mapDispatch)(SignUp);
