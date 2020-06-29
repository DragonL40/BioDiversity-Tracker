import React, { Component } from "react";
import BdHeading from "./bdHeading";
import BdEntries from "./bdEntries";
import entry from "./data.json";

class Bdtable extends Component {
  state = {
    entries: entry,
  };

  render() {
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
