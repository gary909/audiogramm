import React, { Component } from 'react';
import api from '../../api';

export default class Comments extends Component {
    state = {
        comment: ''
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ comment: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.postComments();
        this.setState({ comment: '' });
        this.props.history.push('/playfeed');
    };

    handleClick = event => {
        event.preventDefault();
    };

    postComments = () => {
        api.addComments({
            comment: this.state.comment
        });
    };

    render() {
        console.log(this.state.comment);
        return (
            <div className="comments">
                <h4>It's not for me to say!</h4>
                <p>Comment all you bloody like</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="comments-field searchTerm"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        name="comment"
                        type="text"
                    />
                    <button className="comments-button searchButton" type="submit">
                        post
                    </button>
                </form>
            </div>
        );
    }
}
