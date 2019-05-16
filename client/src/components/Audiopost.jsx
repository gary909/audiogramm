import React, { Component } from 'react';
import Comments from './pages/Comments';
import Counter from './Counter';

export default class Audiopost extends Component {
    render() {
        return (
            <div>
                <div
                    /* style={{
                backgroundImage: `url(${background[this.props.backgroundNr % background.length]})`
            }} */
                    className="audioWrapper2"
                >
                    <div className="audioTitleWrapper">
                        <img className="audioImage" src="/images/hashtag.svg" alt="Hashtag" />
                        <h2 className="audioTitle">{this.props.audio.hashtag}</h2>
                    </div>
                    <div className="audioFooter">
                        <div class="audio-seek-audiopost">
                            <audio controls className="audContrl" class="audio-seek-audiopost">
                                <source src={this.props.audio.videoURL} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>
                <div className="audioWrapper" style={{ marginBottom: '50px' }}>
                    <Comments audio={this.props.audio} />
                </div>
            </div>
        );
    }
}
