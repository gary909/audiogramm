import React, { Component } from 'react';
import api from '../api';

export default class AudioComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let background = [
            './images/blkwav1.png',
            './images/blkwav2.png',
            './images/blkwav3.png',
            './images/blkwav4.png',
            './images/blkwav5.png',
            './images/blkwav6.png'
        ];
        console.log(this.props.backgroundNr);
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
