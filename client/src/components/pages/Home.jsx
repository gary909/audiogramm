import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';

export default class Home extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div className="Home">
                <h3>Audiogram is an audio-sharing community. Sign up to get lorem ipsum </h3>
                <Signup {...this.props} />
                <p>Already ready registered?</p>
                <Login {...this.props} />
            </div>
        );
    }
}
