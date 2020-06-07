import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LogIn extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  updateEmail(event) {
      this.setState({ email: event.target.value })
  }
  updatePassword(event) {
      this.setState({ password: event.target.value })
  }
  handleLogIn() {
    alert('login')
  }

  render(){
    return(
      <div id="login">
        <h1>LogIn</h1>
        <p>Please log in to access the admin dashboard.</p>
        <form onSubmit={this.handleLogIn}>
          <label className="hidden" htmlFor="email">E-mail Address</label>
          <input type="email" id="email" value={this.state.email} placeholder="E-Mail Address" onChange={this.updateEmail} />
          <label className="hidden" htmlFor="password">Password</label>
          <input type="text" id="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword} />
          <input type="submit" id="password" value="Log In" />
        </form>
        <p>or <Link to="/sign-up">Sign Up</Link> here</p>
      </div>
    );
  }
}

export default LogIn;
