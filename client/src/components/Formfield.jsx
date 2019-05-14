<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> 53158c3eec470c12d0cda13fa56e211406e2bfb8
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
>>>>>>> 53158c3eec470c12d0cda13fa56e211406e2bfb8
