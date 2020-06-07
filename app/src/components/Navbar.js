import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { user, getUser, logout } from '../index';

class Navbar extends Component{
  async componentDidMount() {
    await this.props.getUser()
  }
   render(){
      return(
         <div id="navbar">
            <div className="navbar__logo-container">
              <Link to="/">LearnIt</Link>
            </div>
            <div className="navbar__links-container">
              <Link to="/software-engineer">Software Engineer</Link>
              <Link to="/data-scientist">Data Scientist</Link>
              {this.props.loggedIn
                ? <Link to="/admin">Admin</Link>
                : null
              }
              {this.props.loggedIn
                ? <a href="" onClick={this.props.logout}>Log Out</a>
                : <Link to="/log-in">Log In</Link>
              }
            </div>
         </div>
      );
   }
}

const mapState = state => {
  return {
    loggedIn: !state.user.loggedIn,
  }
}

const mapDispatch = dispatch => {
  return {
    logout() {
      dispatch(logout())
    },
    getUser: () => {
      dispatch(getUser())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar);
