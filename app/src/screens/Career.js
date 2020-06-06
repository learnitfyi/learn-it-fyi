import React, { Component } from 'react';
import pathToTitle from '../assets/js/lib/path-to-title';


class Career extends Component{
  render() {
    return(
      <div id="career">
        <h1 class="title">{pathToTitle(this.props.match.path)}</h1>
      </div>
    );
  }
}

export default Career;
