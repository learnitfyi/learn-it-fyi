import React, { Component } from 'react'
import { connect } from 'react-redux'
import { careers } from '../index'
import { skills } from '../index'


class Home extends Component{
  render(){
    this.props.skills.map(el => {
      console.log('el data name', el.data().name)
      console.log('el data books', el.data().books?el.data().books.map(book => { book }):'none')
    })
    return(
      <div id="home">
        <h1>Home</h1>
        <p>Welcome to LearnIt.fyi</p>
        <h2>Careers:</h2>
        <ul>
          {this.props.careers.map((career, idx) => {
            return(
              <li key={`career-${idx}`}>{career.data().name}</li>
            )
          })}
        </ul>
        <h2>Skills:</h2>
        <ul>
          {this.props.skills.map((skill, idx) => {
            return(
              <li key={`skill-${idx}`}>
                <h4>{skill.data().name}</h4>
                <ul>
                  <li>Books: {skill.data().books
                    ? skill.data().books.map(book => {
                      return (
                        <p>{book}</p>
                      )
                    })
                    : 'none listed'}</li>
                  <li>Videos: {skill.data().videos
                    ? skill.data().videos.map(video => {
                      return (
                        <p>{video}</p>
                      )
                    })
                    : 'none listed'}</li>
                  <li>Courses: {skill.data().courses
                    ? skill.data().courses.map(course => {
                      return (
                        <p>{course}</p>
                      )
                    })
                    : 'none listed'}</li>
                </ul>
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
