import React, { Component } from 'react';
import Search from '../pages/Search';

export default class Home extends Component {
  
    render() {
        return (
            <div>
                <div className="Home">
                    <br />
                    <br />
                    <br />
                    <div className="Title-logo">
                        <div>
                            <img src={'./images/earLogo.png'} className="earLogo" alt="logo" />
                            <h3 className="App-title">AUDIOGRAM</h3>
                            <h3>Sign in and be heard</h3>
                            <div className="App-title">
                             
                            </div>
                        </div>
                    </div>

                    <div>
                        <Search />
                    </div>
                </div>
            </div>
        );
    }
}
