import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


class Skill extends Component{
  render() {
    console.log('this.props', this.props)
    return(
      <div id="skill">
          <h1 className="title">{this.props.skill.skill_name}</h1>
          <h3>Books:</h3>
          <ul>
            {this.props.skill.skill_books && this.props.skill.skill_books.map(skill_book => {
              const path = skill_book.book_url
              const displayName = skill_book.book_title || '(title missing from database)'
              const description = skill_book.book_description || '(description missing from database)'
              return (
                <li>
                  <a href={path} target="_blank">{displayName}</a>: {description}
                </li>
              )}
            )}
          </ul>
          <h3>Videos:</h3>
          <ul>
            {this.props.skill.skill_videos && this.props.skill.skill_videos.map(skill_video => {
              const path = skill_video.video_url
              const displayName = skill_video.video_title || '(title missing from database)'
              const description = skill_video.video_description || '(description missing from database)'

              return (
                <li>
                  <a href={path} target="_blank">{displayName}</a>: {description}
                </li>
              )}
            )}
          </ul>
          <h3>Courses:</h3>
          <ul>
            {this.props.skill.skill_courses && this.props.skill.skill_courses.map(skill_course => {
              const path = skill_course.course_url
              const displayName = skill_course.course_title || '(title missing from database)'
              const description = skill_course.course_description || '(description missing from database)'

              return (
                <li>
                  <a href={path} target="_blank">{displayName}</a>: {description}
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
    skill: state.skills.find(el => el.skill_path === ownProps.match.params.path) || {},
  }
}

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, null)(Skill)
