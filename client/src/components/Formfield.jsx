<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> 7b56f5fa63197f53b188763724ef43a38c38d12a
class FormField extends Component {
    render() {
        return (
            <div className="">
                <label className="">{this.props.label}</label>
                <div className="">
                    <input
                        onChange={this.props.inputchange}
                        className=""
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                    />
                </div>
            </div>
        );
    }
}

<<<<<<< HEAD
export default FormField;
=======
export default FormField; 
>>>>>>> 7b56f5fa63197f53b188763724ef43a38c38d12a
