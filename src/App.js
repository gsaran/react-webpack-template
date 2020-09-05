import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import { List } from "./views/listpage";
import { Details } from "./views/details-page";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">React Template</Link>
      </header>
      <Router>
        <List path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
