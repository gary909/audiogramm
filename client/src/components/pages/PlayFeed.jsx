import React, { Component } from 'react';
import api from '../../api';

export default class PlayFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: []
        };
    }
    render() {
        return (
            <div className="PlayFeed">
                <h4>List of Audios</h4>
                {this.state.videoURL.map(el => (
                    <audio controls className="audContrl">
                        <source src={el.videoURL} type="audio/mpeg" />
                    </audio>
                    // <li key={c._id}>{c.videoURL}</li>
                ))}
            </div>
        );
    }

    fetchAudios = () => {
        api.getAudios()
            .then(audios => {
                console.log(audios);
                this.setState({
                    videoURL: audios
                });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.fetchAudios();
    }
}
