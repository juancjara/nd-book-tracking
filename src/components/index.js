import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../App.css";
import Shelves from "./Shelves";
import Library from "./Library/index.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Shelves} />
          <Route path="/search" component={Library} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
