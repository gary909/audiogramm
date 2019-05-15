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
                <h4>Audiogramm is a never heard audio-sharing community. </h4>
                <Signup {...this.props} />
                <p>Already part of the long tail?</p>
                <Login {...this.props} />
                <br></br><br></br><br></br>
            </div>
        );
    }
}
