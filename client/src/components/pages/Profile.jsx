import React, { Component } from 'react';
import api from '../../api';

export default class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secret: null,
            message: null
        };
    }
    render() {
        return (
            <div className="Profile">
                <h4>Profile</h4>
                <div>
                    <p>uplodad picture</p>
                </div>
                <div>
                    <p>Hello {this.state.username}</p>
                </div>

                <div className="result">{this.state.secret}</div>

                {this.state.message && <div className="info info-danger">{this.state.message}</div>}
            </div>
        );
    }
    componentDidMount() {
        api.getSecret()
            .then(data => this.setState({ secret: data.secret }))
            .catch(err => this.setState({ message: err.toString() }));
    }
}
