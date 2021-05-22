import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header class="App-header" />
        <Switch>
          <Home />
        </Switch>
      </Router>
      <Copyright />
    </>
  );
}

export default App;
