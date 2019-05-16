import React, { Component } from 'react';
import Audio from '../Audio';
import Counter from '../Counter';
import PlayFeed from './PlayFeed';

export default class Feed extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }

    /* get the data from the database for the audio with this id

    data: {
        url: https://cloudinary.....mp3
    } */

    render() {
        return (
            <div className="Feed">
                <h2 className="Feed-text">record here</h2>

                <Audio />
            </div>
        );
    }
}
