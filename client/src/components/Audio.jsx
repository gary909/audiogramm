import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
/* import { set } from 'mongoose'; */
/* import { maxHeaderSize } from 'http';
 */
export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            countDownSeconds: 10
        };
    }

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

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

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
                <div className="record-buttons">
                    <button className="recButton"
                        type="button"
                        onMouseDown={this.startRecording}
                        /* onMouseDown={this.startCountDown} */
                        onMouseUp={this.stopRecording}
                    ><i class="fas fa-microphone"></i>
                        Record
                    </button>
                    <button className="recButton"><i class="far fa-save"></i> Save</button>
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
