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
            <div>
                <div className="Home">
                    <header className="App-header">
                        <div className="Title-logo">

                            <div>
                                <img src={'./images/earLogo.png'} className="earLogo" alt="logo" />
                                <h3 className="App-title" >AUDIOGRAM</h3>
                                <div className="App-title">
                                    {/* <NavLink to="/" exact>
                                        AUDIOGRAM
                                    </NavLink> */}
                                </div>
                            </div>
                        </div>

                    </header>
                    <div>
                        <h4>Audiogramm is a never heard audio-sharing community. </h4>
                        <Signup {...this.props} />
                        <p>Already part of the long tail?</p>
                        <Login {...this.props} />
                    </div>


                </div>
            </div >
        );
    }
}
