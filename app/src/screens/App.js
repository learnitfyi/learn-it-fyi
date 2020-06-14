import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../reducers/user-reducer'


/* SCREENS */
import Admin from "./Admin"
import Career from "./Career"
import Home from "./Home"
import LogIn from "./LogIn"
import NotFound from "./NotFound"
import SignUp from "./SignUp"

/* COMPONENTS */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class App extends Component{
  componentDidMount () {
    this.props.getUser()
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
                <Route exact path='/data-scientist' component={Career} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/software-engineer' component={Career} />
                {/* 404 PAGE */}
                <Route component={NotFound} />
              </Switch>
            </main>
            <footer>
              <Footer />
            </footer>
          </div >
        </HashRouter>
      );
   }
}
const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapState, mapDispatch)(App)
