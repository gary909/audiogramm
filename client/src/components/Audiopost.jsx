import React, { Component } from 'react';
import Comments from './pages/Comments';
import Counter from './Counter';

export default class Audiopost extends Component {
    render() {
        console.log(this.props.audio);

        return (
            <div>
                <audio controls className="audContrl">
                    <source src={this.props.audio.videoURL} type="audio/mpeg" />
                </audio>

                <div>
                    <p>{this.props.audio.userId && this.props.audio.userId.username}</p>
                    {this.props.audio.hashtag}
                </div>

                <div>
                    <Comments audio={this.props.audio} />
                </div>
            </div>
        );
    }
}