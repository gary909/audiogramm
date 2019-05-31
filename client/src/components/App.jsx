import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Comments from './pages/Comments';
import PlayFeed from './pages/PlayFeed';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleLogoutClick(e) {
        api.logout();
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <div className="Title-logo">
                            <div>
                                <div className="App-title">
                                    <NavLink to="/" exact>
                                        AUDIOGRAM
                                    </NavLink>
                                </div>
                            </div>

                            <div className="break" />

                            <div className="signup-nav highNav">
                                {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                            </div>
                            <div className="login-nav highNav">
                                {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
                                {api.isLoggedIn() && (
                                    <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                        Logout
                                    </Link>
                                )}
                            </div>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/comments" component={Comments} />
                        <Route path="/test" component={Test} />
                        <Route path="/test2" component={Test2} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/feed" render={props => <Feed {...props} />} />
                        <Route path="/search" component={Search} />
                        {/*  <Route path="/profile" component={Profile} /> */}
                        <Route
                            path="/playfeed"
                            exact
                            render={props => <PlayFeed key="1" {...props} />}
                        />
                        <Route path="/playfeed/:username" render={props => <PlayFeed {...props} />} />
                        <Route render={() => <h2>404</h2>} />
                    </Switch>
                </div>

                <footer className="nav">
                    <div className="lowNav">
                        <div className="App-Header" />
                        {api.isLoggedIn() && (
                            <span>
                                {/* <NavLink to="/" exact>
                                    <i className="fas fa-home navIcon" />
                                </NavLink> */}
                                <div class="low-nav-icons">
                                    <NavLink to="/feed">
                                        <i
                                            className="fas fa-microphone fa-2x"
                                            style={{ height: '80px' }}
                                        />
                                    </NavLink>

                                    <NavLink to="/search">
                                        <i className="fas fa-search navIcon fa-2x" />{' '}
                                    </NavLink>

                                    <NavLink to="/playfeed">
                                        <i className="fas fa-headphones-alt fa-2x" />
                                    </NavLink>
                                    {/* <NavLink to="/profile">
                                    <i className="fas fa-users navIco   n" />
                                </NavLink> */}
                                </div>
                            </span>
                        )}
                        {!api.isLoggedIn() && (
                            <span>
                                <NavLink to="/signup">Sign up</NavLink>
                                <NavLink to="/login">Log in</NavLink>
                            </span>
                        )}
                    </div>
                </footer>
            </div>
        );
    }
}
