import React, { Component } from 'react'
import { connect } from 'react-redux'
import { careers } from '../index'
import { skills } from '../index'
import { Link } from "react-router-dom";

class Home extends Component{
  render(){
    return(
      <div id="home">
        <h1>Home</h1>
        <p>Welcome to LearnIt.fyi</p>
        <h2>Careers:</h2>
        <ul>
          {this.props.careers.map((career, idx) => {
            return(
              <li key={`${career.career_id}-${idx}`}>
                <Link to={`/career/${career.career_path}`}>{career.career_name}</Link>
              </li>
            )
          })}
        </ul>
        <h2>Skills:</h2>
        <ul>
          {this.props.skills.map((skill, idx) => {
            return(
              <li key={`${skill.skill_id}-${idx}`}>
                <Link to={`/skill/${skill.skill_path}`}>{skill.skill_name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    careers: state.careers,
    skills: state.skills
  }
}

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, null)(Home)
