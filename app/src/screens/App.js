import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCareers } from '../reducers/careers-reducer'
import { getSkills } from '../reducers/skills-reducer'
import { getUser } from '../reducers/user-reducer'

/* SCREENS */
import Admin from "./Admin"
import Career from "./Career"
import Home from "./Home"
import LogIn from "./LogIn"
import NotFound from "./NotFound"
import SignUp from "./SignUp"
import Skill from "./Skill"

/* COMPONENTS */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class App extends Component{
  componentDidMount () {
    this.props.getCareers()
    this.props.getSkills()
    this.props.getUser()

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user logged in: ', user,)
      } else {
        console.log('user logged out')
      }
    })
  }
  render(){
    return(
      <HashRouter>
        <div>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Switch>
              {/* SCREENS */}
              <Route exact path='/' component={Home} />
              <Route exact path='/admin' component={Admin} />
              <Route exact path='/career/:path' component={Career} />
              <Route exact path='/skill/:path' component={Skill} />
              <Route exact path='/sign-up' component={SignUp} />
              {/* 404 PAGE */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div >
      </HashRouter>
    )
  }
}

// const mapState = state => {
//   return {
//   }
// }

const mapDispatch = dispatch => {
  return {
    getCareers: () => dispatch(getCareers()),
    getSkills: () => dispatch(getSkills()),
    getUser: () => dispatch(getUser())
  }
}

export default connect(null, mapDispatch)(App)
