import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';
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

        axios.post('http://localhost:5000/api/upload', formData, { withCredentials: true }).then(res => {
            console.log(res);
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
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081" // Change the PINK wave background colour here
                />
                <form>
                    <input
                        className="comments-field searchTerm"
                        value={this.state.hashtag}
                        onChange={this.handleChange}
                        name="comment"
                        type="text"
                    />
                </form>
                <div className="record-buttons">
                    <button
                        className="recButton"
                        type="button"
                        onMouseDown={this.startRecording}
                        /* onMouseDown={this.startCountDown} */
                        onMouseUp={this.stopRecording}
                    >
                        <i className="fas fa-microphone" />
                        Record
                    </button>

                    <button className="recButton popup" onClick={this.handleClick}>
                        <i className="far fa-save" /> Save{' '}
                        <span className="popuptext" id="myPopup">
                            Popup text...
                        </span>
                    </button>

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
