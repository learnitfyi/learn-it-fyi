import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


class Career extends Component{
  render() {

    return(
      <div id="career">
        <h1 className="title">{this.props.career.career_name}</h1>
        <ul>
          {this.props.career.career_skills && this.props.career.career_skills.sort().map(career_skill => {
            const path = `/skill/${career_skill.toLowerCase().split('_').join('-')}`
            const displayName = career_skill.split('_').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ')
            return (
              <li>
                <Link to={path}>{displayName}</Link>
              </li>
            )}
          )}
        </ul>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    career: state.careers.find(el => el.career_path === ownProps.match.params.path) || {},
  }
}

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, null)(Career)
