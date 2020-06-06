import React, { Component } from 'react';
import { Link } from "react-router-dom";

/* SCREENS */
import AdminDashboard from "./AdminDashboard";
import LogIn from "./LogIn";


class Admin extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  render(){
    return(
      <div id="admin">
        <h1>Admin Dashboard</h1>
        {this.state.loggedIn
          ? <AdminDashboard />
          : <LogIn />
        }
      </div>
    );
   }
}
export default Admin;
