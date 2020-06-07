import React, { Component } from 'react';
import { Link } from "react-router-dom";


/* SCREENS */
import AdminDashboard from "./AdminDashboard";
import LogIn from "./LogIn";


class Admin extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loggedIn: false,
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
   firebase.auth().onAuthStateChanged(async function() {
    const user = await firebase.auth().currentUser;
    if (user) {
      this.setState({
         loggedIn: true,
         displayName: user.displayName,
         email: user.email,
         emailVerified: user.emailVerified,
         photoURL: user.photoURL,
         isAnonymous: user.isAnonymous,
         uid: user.uid,
         providerData: user.providerData,
        });
      } else {
        this.setState({ loggedIn: false });
      }
    }.bind(this));

    this.setState({ loading: false });
  }

  render(){
    return(
      <div id="admin">
        {this.state.loading
          ? <h2>Loading...</h2>
          : this.state.loggedIn
            ? <AdminDashboard
                displayName={this.state.displayName}
              />
            : <LogIn />
        }
      </div>
    );
   }
}

export default Admin;
