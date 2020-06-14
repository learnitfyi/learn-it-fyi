import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logIn } from '../reducers/user-reducer';

class LogIn extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(event) {
      this.setState({ email: event.target.value })
  }
  updatePassword(event) {
      this.setState({ password: event.target.value })
  }
  handleSubmit() {
    this.props.logIn(this.state.email, this.state.password)
  }
  render(){
    return(
      <div id="login">
      {this.props.loggedIn
        ? null
        : <div>
        <h1>Log In</h1>
        <p>Please log in to access the admin dashboard.</p>
        <form onSubmit={this.handleSubmit}>
          <label className="hidden" htmlFor="email">E-mail Address</label>
          <input type="email" id="email" value={this.state.email} placeholder="E-Mail Address" onChange={this.updateEmail} />
          <label className="hidden" htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword} />
          <input type="submit" id="password" value="Log In" />
        </form>
        <p>or <Link to="/sign-up">Sign Up</Link> here</p>
      </div>
      }
      </div>

    );
  }
}


const mapState = state => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    logIn: (email, password) => dispatch(logIn(email, password))
  }
}

export default connect(mapState, mapDispatch)(LogIn);
