import React, { Component } from "react";

class BdEntry extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        {this.renderEntry()}
      </tr>
    );
  }

  renderEntry = () => {
      var data = Array.from(this.props.entry);
      return Object.keys(this.props.entry).map(e => <td key={e}>{this.props.entry[e]}</td>);
  };
}

export default BdEntry;
