import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            image: '',
            message: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        let data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        api.signup(data)
            .then(result => {
                this.props.history.push('/profile'); // Redirect to the home page
            })
            .catch(err => this.setState({ message: err.toString() }));
    }

    render() {
        console.log(this.props);
        return (
            <div className="signup">
                {/* <h4>Signup</h4> */}
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div>
                        <input
                            className="textfield searchBar"
                            type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div>
                        <input
                            className="textfieldname searchBar"
                            type="email"
                            pattern="[^ @]*@[^ @]*"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div>
                        <input
                            className="textfield searchBar"
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button className="button" onClick={e => this.handleClick(e)}>
                        Signup
                    </button>
                </form>
                {this.state.message && <div className="info info-danger">{this.state.message}</div>}
            </div>
        );
    }
}
