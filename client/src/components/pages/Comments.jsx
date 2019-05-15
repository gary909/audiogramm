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
            audioId: this.props.audio._idç
        });
    };

    fetchComments = () => {
        api.getComments(this.props.audio._id)
            .then(comments => {
                console.log('comments');
                console.log(comments);
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
        console.log(this.state.comment);
        return (
            <div className="comments">
                <div>
                    {this.state.comments.map(commentObj => {
                        console.log('Was ist da');
                        console.log(commentObj);
                        return (
                            <p>
                                {commentObj.comment}
                                {commentObj.owner.username}
                            </p>
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
