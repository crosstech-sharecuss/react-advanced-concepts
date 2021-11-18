import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Summary } from "./components/Summary";
import CustomHooks from "./concepts/1-custom-hooks/CustomHooks";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <nav>
            <ol>
              <li>
                <Link to="/custom-hooks">Custom Hooks</Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="content">
          <Switch>
            <Route path="/" exact={true}>
              <Summary />
            </Route>
            <Route path="/custom-hooks">
              <CustomHooks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
