import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component{
   render(){
      return(
         <div id="navbar">
            <div class="navbar__logo-container">
              <Link to="/">LearnIt</Link>
            </div>
            <div class="navbar__links-container">
              <Link to="/software-engineer">Software Engineer</Link>
              <Link to="/data-scientist">Data Scientist</Link>
              <Link to="/admin">Admin</Link>
            </div>
         </div>
      );
   }
}
export default Navbar;
