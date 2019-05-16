import React, { Component } from 'react';
// import Comments from './pages/Comments';




export default class TextInput extends Component {
  render() {
    return (
      <div>
        <br></br>
        <img className="titleImage" src={'./images/singer.jpg'} alt="profile" />
        <br></br>
        <div className="textIntro">
          <p>Be Heard.</p>

        </div>
        <div>
          <audio controls className="audContrl">
            <button type="button" className="play"></button>
            {/* <source src={this.props.audio.videoURL} type="audio/mpeg" /> */}
          </audio>

          {/* <div>
            <p>{this.props.audio.userId && this.props.audio.userId.username}</p>
            {this.props.audio.hashtag}
          </div> */}

          {/* <div>
            <Comments audio={this.props.audio} />
          </div> */}


        </div>
        <br></br><br></br><br></br>

      </div>
    )
  }
} 
