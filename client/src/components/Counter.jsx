import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1
        }));
    };
    render() {
        return (
            <div>
                <button class="counter" onClick={this.handleClick}>
                    <i class="far fa-heart"></i>    {this.state.count}
                </button>
            </div>
        );
    }
}

export default Counter;
