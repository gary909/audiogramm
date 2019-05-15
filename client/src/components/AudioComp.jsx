import React, { Component } from 'react';
import api from '../api';

export default class AudioComp extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let background = ["./images/fineWav1.png", "./images/fineWav2.png", "./images/colWav.png", "./images/colorWav4.png", "./images/colorWav5.png", "./images/colorWav6.png"]
    console.log(this.props.backgroundNr)
    return (
      <div style={{
        backgroundImage: `url(${background[this.props.backgroundNr % background.length]})`
      }} className="audioWrapper">
        <div className="audioTitleWrapper">
          <img className="audioImage" src="./images/hashtag.svg" alt="Hashtag" />
          <h1 className="audioTitle">{this.props.hashTag}</h1>
        </div>
        <div className="audioFooter">
          <div className="audioUser">{this.props.user}
          </div>

          <div className="audioLikes">
            {this.props.likes} likes
          </div>
        </div>

      </div>
    );
  }
  componentDidMount() {
    console.log("component did mount")
  }
}