import React, { Component } from 'react';

export default class AddHashtag extends Component {
    state = {
        hashtag: 'add hashtag'
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ hashtag: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ hashtag: 'add name here' });
    };

    render() {
        console.log(this.state.comment);
        return (
            <div className="hashtag">
                <h4>Give a #name to your Audio here:</h4>

                <form onSubmit={this.handleSubmit}>
                    <input
                        className="hashtags-field"
                        value={this.state.hashtag}
                        onChange={this.handleChange}
                        name="hashtag"
                        type="text"
                    />
                    <button className="hashtag-button" type="submit">
                        save
                    </button>
                </form>
            </div>
        );
    }
}
