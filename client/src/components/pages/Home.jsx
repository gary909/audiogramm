import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import FormField from '../Formfield';
import Search from '../pages/Search';
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


                    <br></br><br></br><br></br>
                    <div className="Title-logo">
                        <div>
                            <img src={'./images/earLogo.png'} className="earLogo" alt="logo" />
                            <h3 className="App-title">AUDIOGRAM</h3>
                            <div className="App-title">
                                {/* <NavLink to="/" exact>
                                        AUDIOGRAM
                                    </NavLink> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Formfield component that's copied from another lab. here the user can type in whatever he or she is looking for */}
                        {/* Check out the FormField component! */}
                        <form>
                            {/* Username:{' '} */}
                            <input
                                className="textfield searchBar"
                                type="text"
                                // value={this.state.username}
                                // name="username"
                                placeholder="Search Anything"
                                onChange={this.handleInputChange}
                            /></form>
                    </div>

                    <br></br><br></br>

                    <div>
                        <audio controls className="audContrl">
                            <button type="button" className="play"></button>
                            {/* <source src={this.props.audio.videoURL} type="audio/mpeg" /> */}
                        </audio>




                    </div>

                    <br></br><br></br>

                    <div>
                        <h4>Audiogramm is a never heard audio-sharing community. </h4>
                        <Signup {...this.props} />
                        <p>Already part of the long tail?</p>
                        <Login {...this.props} />
                        <br></br><br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        );
    }
}
