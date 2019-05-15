import React, { Component } from 'react';
import Audiopost from '../Audiopost';
import api from '../../api';
import Audio from '../Audio';

export default class PlayFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: [],
            username: ''
        };
    }
    render() {
        console.log(this.props);
        const arrayCopy = this.state.audios.slice();
        arrayCopy.reverse();
        return (
            <div className="PlayFeed">
                <h4>List of Audios</h4>
                {arrayCopy.map(audioObj => (
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
        // pass a parameter to the getAudios function
        // so that we get the audios only for the user whose username is in the url
        api.getAudios(this.props.match.params.username)
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
