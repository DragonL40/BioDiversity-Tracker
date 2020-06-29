import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="Nav">
        <Link to="/">
          <button type="button" className="btn btn-primary m-2 btn-lg">
            Home
          </button>
        </Link>
        <Link to="/table-display">
          <button type="button" className="btn btn-primary m-2 btn-sm">
            Table Display
          </button>
        </Link>
        <Link to="/entry-form">
          <button type="button" className="btn btn-primary m-2 btn-sm">
            Contribute
          </button>
        </Link>
        <Link to="/path3">Link 3</Link>
      </nav>
    );
  }
}

export default NavBar;
