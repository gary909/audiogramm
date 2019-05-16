import React, { Component } from 'react';
import api from '../../api';

export default class Comments extends Component {
    state = {
        comment: '',
        comments: []
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ comment: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.postComments();
        this.setState({ comment: '' });
        /* this.props.history.push('/playfeed'); */
    };

    handleClick = event => {
        event.preventDefault();
    };

    postComments = () => {
        api.addComments({
            comment: this.state.comment,
            audioId: this.props.audio._id
        }).then(() => this.fetchComments());
    };

    fetchComments = () => {
        api.getComments(this.props.audio._id)
            .then(comments => {
                this.setState({
                    comments: comments
                });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.fetchComments();
    }

    render() {
        return (
            <div className="comments">
                <div class="comments-style">
                    {this.state.comments.map(commentObj => {
                        return (
                            <div class="comments">
                                <p>
                                    {commentObj.owner.username}: {commentObj.comment}
                                </p>
                            </div>
                        );
                    })}
                </div>
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
