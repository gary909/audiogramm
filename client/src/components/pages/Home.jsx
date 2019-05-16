import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import FormField from '../Formfield';
import Search from '../pages/Search';
import { Link } from 'react-router-dom';
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
                                <h3 className="App-title">AUDIOGRAM</h3>
                                <div className="App-title">
                                    {/* <NavLink to="/" exact>
                                        AUDIOGRAM
                                    </NavLink> */}
                                </div>
                            </div>
                        </div>
                    </header>
                    <div>
                        <Search />
                    </div>
                </div>
            </div>
        );
    }
}
