import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { user } from '../index';
import { logOut } from '../reducers/user-reducer';

class Navbar extends Component{
  constructor(props) {
    super(props)

    this.handleLogOutClick = this.handleLogOutClick.bind(this)
  }

  handleLogOutClick() {
    this.props.logOut()
  }

  render(){
     console.log('user', this.props.user)
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
                ? <a href="" onClick={this.handleLogOutClick}>Log Out</a>
                : <Link to="/log-in">Log In</Link>
              }
            </div>
         </div>
      );
   }
}

const mapState = state => {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapState, mapDispatch)(Navbar);
