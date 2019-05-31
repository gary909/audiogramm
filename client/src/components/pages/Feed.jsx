import React, { Component } from 'react';
import Audio from '../Audio';

export default class Feed extends Component {
    render() {
        return (
            <div className="Feed">
                <h2 className="Feed-text">record here</h2>

                <Audio {...this.props} />
            </div>
        );
    }
}
