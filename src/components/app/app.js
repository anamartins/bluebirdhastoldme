import React from "react";
import MiniVillagersView from "../../views/miniVillagersView/miniVillagersView";
import AboutView from "../../views/about/aboutView";
import VillagerDetails from "../../views/villagerDetails/villagerDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <MiniVillagersView />
            </Route>
            <Route exact path="/villager/:slug">
              <VillagerDetails />
            </Route>
            <Route exact path="?:filter=:value">
              <MiniVillagersView />
            </Route>
            <Route exact path="/about">
              <AboutView />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
