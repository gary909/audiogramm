import React, { Component } from 'react';

export default class Search extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Search">
        <h4>Find Me Here</h4>
        <p>I'm searching for a friend</p>
        <form type="text">
          <button className="button" onClick={(e) => this.handleClick(e)}>Search</button>
        </form>
      </div>
    );
  }
}