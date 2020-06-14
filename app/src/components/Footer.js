import React, { Component } from 'react'
import getYear from '../assets/js/lib/get-year'


class Footer extends Component{
   render(){
      return(
         <div id="footer">
            <p>&copy {`${getYear()}`} LearnIt.fyi</p>
         </div>
      )
   }
}
export default Footer
