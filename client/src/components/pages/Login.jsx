import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        api.login(this.state.username, this.state.password)
            .then(result => {
                console.log('SUCCESS!');
                this.props.history.push('/'); // Redirect to the home page
            })
            .catch(err => this.setState({ message: err.toString() }));
    }

    render() {
        return (
            <div className="Login">
                {/* <h4>Login</h4> */}
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="searchBar"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="searchBar"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <button className="button" onClick={e => this.handleClick(e)}>
                        Login
                    </button>
                </form>
                {this.state.message && <div className="info info-danger">{this.state.message}</div>}
            </div>
        );
    }
}
