import React, { Component } from "react";

class BdHeading extends Component {
    
  render() {
    return (
      <thead className="thread-dark">
        <tr>
    <th>#</th>
          {this.renderTableHeadings()}
        </tr>
      </thead>
    );
  }

  renderTableHeadings = () => {
    return (
        Object.keys(this.props.entries[0]).map((element) => (
          <th key={element} scope="col" >{element}</th>
        ))
    );
  };
}

export default BdHeading;
