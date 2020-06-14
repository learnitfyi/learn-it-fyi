import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { user } from '../index'


/* SCREENS */
import AdminDashboard from "./AdminDashboard"
import LogIn from "./LogIn"


class Admin extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div id="admin">
        {this.props.loggedIn
            ? <AdminDashboard
                userName={this.props.userName}
              />
            : <LogIn />
        }
      </div>
    )
   }
}

const mapState = state => {
  return {
    loggedIn: state.user.loggedIn,
    userName: state.user.displayName
  }
}

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, null)(Admin)
