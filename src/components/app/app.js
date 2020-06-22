import React from "react";
import MiniVillagersView from "../../views/miniVillagersView/miniVillagersView";
import VillagerDetails from "../../views/villagerDetails/villagerDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
