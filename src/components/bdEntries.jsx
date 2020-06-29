import React, { Component } from "react";
import BdEntry from "./bdEntry";

class BdEntries extends Component {

  render() {
    return <tbody>{this.renderEntries()}</tbody>;
  }

  renderEntries() {
    var index = 0;
    return this.props.entries.map((entry) => {
      index++;
      return <BdEntry entry={entry} key={index} id={index}/>;
    });
  }
}

export default BdEntries;
