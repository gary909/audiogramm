import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

import api from '../api';

/* import { set } from 'mongoose'; */
/* import { maxHeaderSize } from 'http';
 */

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            countDownSeconds: 10,
            hashtag: ''
        };
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ hashtag: value });
    };

    startRecording = () => {
        let seconds = this.state.countDownSeconds;
        let myInterval = setInterval(() => {
            seconds--;
            this.setState({
                countDownSeconds: seconds
            });
            if (this.state.countDownSeconds < 0 || !this.state.record) {
                clearInterval(myInterval);
                this.setState({
                    countDownSeconds: 10
                });
            }
        }, 1000);

        this.setState({
            record: true
        });
        setTimeout(() => {
            this.setState({
                record: false
            });
        }, 10000);
    };

    stopRecording = () => {
        this.setState({
            record: false
        });
    };

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop = ({ blob }) => {
        this.setState({ blob });
    };

    saveRecorded = () => {
        const blob = this.state.blob;
        console.log('stop');

        let file = new File([blob], 'videoURL');

        let formData = new FormData();
        formData.append('videoURL', file);
        formData.append('hashtag', this.state.hashtag);

        api.postAudio(formData).then(() => {
            this.props.history.push('/playfeed');
        });

        console.log('recordedBlob is: ', blob);
        console.log('formData: ', file);
    };

    handleClick = () => {
        this.saveRecorded();
    };

    render() {
        return (
            <div>
                {this.state.countDownSeconds}
                <br />
                <ReactMic
                    record={this.state.record}
                    className="sound-wavegit"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#ff8dda"
                />
                <div class="audio-rec-wrap">
                    <form>
                        <input
                            className="searchBar searchTerm"
                            value={this.state.hashtag}
                            onChange={this.handleChange}
                            name="comment"
                            type="text"
                            placeholder="insert audio name"
                        />
                    </form>
                    <div className="record-buttons">
                        <button
                            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                            className="recButton"
                            type="button"
                            onMouseDown={this.startRecording}
                            /* onMouseDown={this.startCountDown} */
                            onMouseUp={this.stopRecording}
                            onTouchStart={this.startRecording}
                            onTouchEnd={this.stopRecording}
                        >
                            <i className="fas fa-microphone" />
                            Record
                        </button>

                        <button
                            style={{ userSelect: 'none' }}
                            className="recButton popup"
                            onClick={this.handleClick}
                        >
                            <i className="far fa-save" /> Save{' '}
                            <span className="popuptext" id="myPopup" />
                        </button>
                    </div>
                    {/* 
                    <button onClick={this.startRecording} type="button">
                        Start
                    </button>
                    <button onClick={this.stopRecording} type="button">
                        Stop
                    </button> */}
                </div>
            </div>
        );
    }
}
