import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
/* import { set } from 'mongoose'; */
/* import { maxHeaderSize } from 'http';
 */
export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false
        };
    }

    startRecording = () => {
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
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
                />
                <div className="record-buttons">
                    <button onClick={this.startRecording} type="button">
                        Start
                    </button>
                    <button onClick={this.stopRecording} type="button">
                        Stop
                    </button>
                </div>
            </div>
        );
    }
}
