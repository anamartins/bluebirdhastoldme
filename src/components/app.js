import React from "react";
import MiniVillagersList from "../views/miniVillagersList";
import VillagerDetails from "../views/villagerDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <MiniVillagersList />
          </Route>
          <Route exact path="/villager/:name">
            <VillagerDetails />
          </Route>
          <Route exact path="/:filter/:value">
            <MiniVillagersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
