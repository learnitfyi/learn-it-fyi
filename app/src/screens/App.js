import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

/* SCREENS */
import Admin from "./Admin";
import DataScientist from "./DataScientist";
import Home from "./Home";
import LogIn from "./LogIn";
import NotFound from "./NotFound";
import SoftwareEngineer from "./SoftwareEngineer";
import SignUp from "./SignUp";

/* COMPONENTS */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class App extends Component{
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
                <Route exact path='/data-scientist' component={DataScientist} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/software-engineer' component={SoftwareEngineer} />
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
export default App;
