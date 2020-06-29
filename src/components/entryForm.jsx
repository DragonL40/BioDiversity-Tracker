import React, { Component } from "react";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      species: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    alert(
      "an entry has been submitted: location-" +
        this.state.location +
        " species-" +
        this.state.species
    );


    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          />
        </label>
        <br />
        <label>
          Species:
          <input
            type="text"
            value={this.state.species}
            onChange={this.handleChange}
            name="species"
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default EntryForm;
