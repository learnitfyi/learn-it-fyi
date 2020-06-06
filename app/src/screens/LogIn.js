import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LogIn extends Component{
   render(){
      return(
         <div id="login">
            <h1>LogIn</h1>
            <form>
              <label class="hidden" for="email">E-mail Address</label>
              <input type="text" id="email" pattern="email" value="" placeholder="E-Mail Address" required />
              <label class="hidden" for="password">Password</label>
              <input type="text" id="password" value="" placeholder="Password" required />
              <input type="submit" id="password" value="Log In" />
            </form>
            <p>Please log in to access the admin dashboard.</p>
            <Link to="/signup">Sign Up</Link>
         </div>
      );
   }
}
export default LogIn;
