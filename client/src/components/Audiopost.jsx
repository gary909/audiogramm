import React, { Component } from 'react';
import Comments from './pages/Comments';
import Counter from './Counter';

export default class Audiopost extends Component {
    render() {
        console.log(this.props.audio);

        return (
            <div
                /* style={{
                backgroundImage: `url(${background[this.props.backgroundNr % background.length]})`
            }} */
                className="audioWrapper"
            >
                <div className="audioTitleWrapper">
                    <img className="audioImage" src="./images/hashtag.svg" alt="Hashtag" />
                    <h2 className="audioTitle">{this.props.hashtag}</h2>
                </div>
                {/*  <div className="audioFooter">
                <div className="audioUser">{this.props.user.username}</div>

                {/*   <div className="audioLikes">{this.props.likes} likes</div> */}{' '}
                <audio controls className="audContrl">
                    <source src={this.props.videoURL} type="audio/mpeg" />
                </audio>
                <div class="audio-seek-audiopost">
                    <audio controls className="audContrl">
                        <source src={this.props.audio.videoURL} type="audio/mpeg" />
                    </audio>
                    <div>
                        <p>{this.props.audio.userId && this.props.audio.userId.username}</p>
                        {this.props.audio.hashtag}
                    </div>{' '}
                    */
                    <div class="comments-styling">
                        <Comments audio={this.props.audio} />
                    </div>
                </div>
            </div>
        );
    }
}
