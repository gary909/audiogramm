import React, { Component } from 'react';
import api from '../../api';

export default class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }
  render() {
    return (
      <div className="Countries">
        <h4>List of countries</h4>
        {this.state.countries.map(c => <li key={c._id}>{c.name}</li>)}
      </div>
    );
  }
  componentDidMount() {
    api.getCountries()
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries
        })
      })
      .catch(err => console.log(err))
  }
}