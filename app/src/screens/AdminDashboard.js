import React, { Component } from 'react';
import { Link } from "react-router-dom";


class AdminDashboard extends Component{
   render(){
      return(
         <div id="admin-dashboard">
           <h1>Welcome, {this.props.displayName}</h1>
           <p>{this.props.loggedIn}</p>
           <p>{this.props.displayName}</p>
           <p>{this.props.email}</p>
           <p>{this.props.emailVerified}</p>
           <p>{this.props.photoURL}</p>
           <p>{this.props.isAnonymous}</p>
           <p>{this.props.uid}</p>
           <p>{this.props.providerData}</p>
         </div>
      );
   }
}
export default AdminDashboard;
