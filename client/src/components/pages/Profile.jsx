import React, { Component } from 'react';
import api from '../../api';

class Profile extends Component {
    state = {
        photo: '',
        username: '',
        email: '',
        location: 'New York, USA'
    };

    componentDidMount() {
        api.getProfile().then(data => {
            this.setState({
                photo: data.photo,
                username: data.username,
                email: data.email
            });
        });
    }

    render() {
        return (
            <div style={{ margin: '0 auto', width: '100%' }}>
                <br />
                <br />
                <br />

                <img src={this.state.photo} alt="profile" />
                <h4>
                    <span>username: </span>
                    {this.state.username}
                </h4>
                <p>
                    <span>email: </span>
                    {this.state.email}
                </p>
                <p>
                    <span>location: </span>
                    {this.state.location}
                </p>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Profile;
