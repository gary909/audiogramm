import React, { Component } from 'react';

import ReactPlayer from 'react-player';

export default class Audio extends Component {
    render() {
        return (
            <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
            </div>
        );
    }
}

//...
