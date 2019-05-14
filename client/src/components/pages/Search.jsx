import React, { Component } from 'react';
import AudioComp from './AudioComp';
import FormField from './Formfield';

/* TODO */
/* Styling */
/* Explain to Sylvie what we just did */

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
        let data0 = {
            hashtag: 'FullofEnergie',
            userId: 'Sylvie',
            likes: '92813'
        };
        let data1 = {
            hashtag: 'BrilliantMood',
            userId: 'Gary',
            likes: '12331'
        };
        let data2 = {
            hashtag: 'Thor',
            userId: 'Thor',
            likes: '10240813'
        };

        /* Once the data comes in from the data, put it in the state in the apiHash state */
        this.setState({
            apiHash: [...this.state.apiHash, data0, data1, data2]
        });
    }

    /* takes care of whatever is being written in the searchinput and sets it to the state */
    handleSearchInput = e => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
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

                {/* 
        1. Looks into the array that contains all the info from Cloudinary
        2. Filters out everything that doesn't match with what is in the search-input
        2.5 is .toLowerCase() so it's case insensitive
        4. maps over remaining elements (which are not filtered out) and renders them to the page
        */}
                {this.state.apiHash
                    .filter(el => el.hashTag.toLowerCase().includes(this.state.search.toLowerCase()))
                    .map((el, i) => {
                        return (
                            <AudioComp
                                key={i}
                                backgroundNr={i}
                                hashtag={el.hashtag}
                                user={el.user}
                                likes={el.likes}
                            />
                        );
                    })}
                <p>I'm searching for a friend</p>
            </div>
        );
    }
}
