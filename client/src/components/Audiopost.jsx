import React, { Component } from 'react';
import PlayFeed from './pages/PlayFeed';
import Comments from './pages/Comments';

export default class Audiopost extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <div>Username Hashtag</div>
                <div>Likes</div>
                <div>Comments (Usernames : Comment)</div>
                <div>
                    <Comments />
                </div>
            </div>
        );
    }
}
