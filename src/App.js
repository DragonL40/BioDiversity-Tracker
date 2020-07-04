import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import TablePage from "./pages/tablePage";
import HomePage from "./pages/homePage";
import EntryForm from "./components/entryForm";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/table-display">
              <TablePage />
            </Route>
            <Route path="/entry-form">
              <EntryForm/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
