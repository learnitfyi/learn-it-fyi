import React, { Component } from 'react';
import { Link } from "react-router-dom";

/* SCREENS */
import AdminDashboard from "./AdminDashboard";
import LogIn from "./LogIn";


class Admin extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
      displayName: null,
      email: null,
      emailVerified: null,
      photoURL: null,
      isAnonymous: null,
      uid: null,
      providerData: null,
    };
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({
          loggedIn: true,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        });
        alert('user logged in');
      } else {
        alert('user logged out');
        this.setState({ loggedIn: false });
      }
    }.bind(this));
  }

  render(){
    return(
      <div id="admin">
        <h1>Admin Dashboard</h1>
        {this.state.loggedIn
          ? <AdminDashboard
              loggedIn={this.state.loggedIn}
              displayName={this.state.displayName}
              email={this.state.email}
              emailVerified={this.state.emailVerified}
              photoURL={this.state.photoURL}
              isAnonymous={this.state.isAnonymous}
              uid={this.state.uid}
              providerData={this.state.providerData}
            />
          : <LogIn />
        }
      </div>
    );
   }
}
export default Admin;
