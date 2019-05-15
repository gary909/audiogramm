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
                <h3>Audiogramm is a never heard audio-sharing community. </h3>
                <Signup {...this.props} />
                <p>Already part of the long tail?</p>
                <Login {...this.props} />
            </div>
        );
    }
}
