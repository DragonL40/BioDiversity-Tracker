import React, { Component } from "react";
import BdHeading from "./bdHeading";
import BdEntries from "./bdEntries";
import entry from "./data.json";
import axios from "axios";

class Bdtable extends Component {
  state = {
    entries: entry,
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <table className="table table-striped">
          <BdHeading entries={this.state.entries} />
          <BdEntries entries={this.state.entries} />
        </table>
      </div>
    );
  }
}

export default Bdtable;
