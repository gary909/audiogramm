import React, { Component } from 'react';
import Audio from '../Audio';
/* import sound from './../../soundfiles/divver.mp3'; */

export default class Home extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div className="Home">
                <h4>Home</h4>
                <p>This is a sample project with the MERN stack</p>
                <Audio />
                {/* <audio controls>
                    <source src={sound} type="audio/mpeg" />
                </audio> */}
            </div>
        );
    }
}
