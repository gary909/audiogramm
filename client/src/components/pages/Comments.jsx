import React, { Component } from 'react';

export default class Comments extends Component {
    state = {
        comment: 'add comment'
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ comment: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comment: 'add comment' });
    };

    handleClick = event => {
        event.preventDefault();

        // api.postComment({comment})

        // redirect
        // this.props.history.push('/playfeed')
    };

    render() {
        console.log(this.state.comment);
        return (
            <div className="comments">
                <h4>It's not for me to say!</h4>
                <p>Comment all you bloody like</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="comments-field"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        name="comment"
                        type="text"
                    />
                    <button className="comments-button" onCLick={this.handleClick}>
                        post
                    </button>
                </form>
            </div>
        );
    }
}
