import React, { Component } from 'react';
import AudioComp from '../AudioComp';
import FormField from '../Formfield';
import api from '../../api';

/* TODO */
/* Styling */
/* Explain to Sylvie what we just did - Jaaaaaaaaa */

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiHash: [],
            search: ''
        };
    }
    componentDidMount() {
        /* Here comes an api call to cloudinary that searches for all the audiofiles and sets to state. 
    the search will filter out the correct hashtags */

        /* Fake data. Must be changed when cloudinary is set up */

        api.getAllAudios()
            .then(data => this.setState({ apiHash: data }))
            .catch(err => this.setState({ message: err.toString() }));

        console.log(this.state.apiHash);
    }

    /* takes care of whatever is being written in the searchinput and sets it to the state */
    handleSearchInput = e => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
        console.log(this.state.apiHash);
        return (
            <div className="Search">
                <h4>Find Me Here</h4>
                <div>
                    {/* Formfield component that's copied from another lab. here the user can type in whatever he or she is looking for */}
                    {/* Check out the FormField component! */}
                    <FormField
                        label="Audiogramm"
                        value={this.state.search}
                        name="search"
                        type="text"
                        placeholder="insert something"
                        inputchange={e => this.handleSearchInput(e)}
                    />
                </div>

                {this.state.apiHash
                    .filter(el => el.hashtag.toLowerCase().includes(this.state.search.toLowerCase()))
                    .map((el, i) => {
                        return (
                            <AudioComp
                                key={i}
                                backgroundNr={i}
                                hashtag={el.hashtag}
                                user={el.userId}
                                url={el.videoURL}
                                likes={el.likes}
                            />
                        );
                    })}
                <p>I'm searching for a friend</p>
            </div>
        );
    }
}
