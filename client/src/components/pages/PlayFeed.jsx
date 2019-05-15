import React, { Component } from 'react';
import Audiopost from '../Audiopost';
import api from '../../api';
import Audio from '../Audio';

export default class PlayFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: []
        };
    }
    render() {
        return (
            <div className="PlayFeed">
                <h4>List of Audios</h4>
                {this.state.audios.map(audioObj => (
                    // <audio controls className="audContrl">
                    //     <source src={el.videoURL} type="audio/mpeg" />
                    // </audio>
                    <Audiopost audio={audioObj} />
                    // <li key={c._id}>{c.videoURL}</li>
                ))}
            </div>
        );
    }

    fetchAudios = () => {
        api.getAudios()
            .then(audios => {
                console.log('audios');
                console.log(audios);
                this.setState({
                    audios: audios
                });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.fetchAudios();
    }
}
