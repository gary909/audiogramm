import React, { Component } from 'react';
import api from '../api';

export default class AudioComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let background = [
            './images/blkAlphaWav1.png',
            './images/blkAlphaWav2.png',
            './images/blkAlphaWav3.png',
            './images/blkAlphaWav4.png',
            './images/blkAlphaWav5.png',
            './images/blkAlphaWav6.png'
        ];
        console.log(this.props.backgroundNr);
        return (
            <div
                style={{
                    backgroundImage: `url(${background[this.props.backgroundNr % background.length]})`
                }}
                className="audioWrapper"
            >
                <div className="audioTitleWrapper">
                    <img className="audioImage" src="./images/hashtag.svg" alt="Hashtag" />
                    <h1 className="audioTitle">{this.props.hashtag}</h1>
                </div>
                <div className="audioFooter">
                    <div className="audioUser">{this.props.user.username}</div>

                    <div className="audioLikes">{this.props.likes} likes</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log('component did mount');
    }
}
