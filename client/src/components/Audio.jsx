import React, { Component } from 'react';

import ReactAudioPlayer from 'react-audio-player';

export default class audio extends Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
            </div>
        );
    }
}

//...
