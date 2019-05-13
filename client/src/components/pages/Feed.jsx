import React, { Component } from 'react';
import Audio from '../Audio';
import sound from './../../soundfiles/divver.mp3';
import Counter from '../Counter';

export default class Feed extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div className="Feed">
                <h4>Home</h4>
                <p>Record audio hear (sic)</p>
                <Audio />

                <div>
                    <Counter className="counter" />
                </div>

                <audio controls className="audContrl">
                    <source src={sound} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}
