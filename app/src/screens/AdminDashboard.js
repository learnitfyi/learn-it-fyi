import React, { Component } from 'react';
import { Link } from "react-router-dom";


class AdminDashboard extends Component{
   render(){
     console.log(this.props)
      return(
         <div id="admin-dashboard">
           <h1>Admin</h1>
           <h2>Welcome to your Dashboard, {this.props.userName}.</h2>
         </div>
      );
   }
}
export default AdminDashboard;
