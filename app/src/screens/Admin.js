import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { user } from '../index';


/* SCREENS */
import AdminDashboard from "./AdminDashboard";
import LogIn from "./LogIn";
import { connect } from 'react-redux';


class Admin extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount () {
   // firebase.auth().onAuthStateChanged(async function() {
   //  const user = await firebase.auth().currentUser;
   //  if (user) {
   //    this.setState({
   //       loggedIn: true,
   //       displayName: user.displayName,
   //       email: user.email,
   //       emailVerified: user.emailVerified,
   //       photoURL: user.photoURL,
   //       isAnonymous: user.isAnonymous,
   //       uid: user.uid,
   //       providerData: user.providerData,
   //      });
   //    } else {
   //      this.setState({ loggedIn: false });
   //    }
   //  }.bind(this));
  }
  render(){
    return(
      <div id="admin">
        {this.props.loggedIn
            ? <AdminDashboard
                displayName={this.props.user.user.displayName}
              />
            : <LogIn />
        }
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

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, null)(Admin);
