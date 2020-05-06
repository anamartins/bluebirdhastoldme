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
            <h1>Animal Crossing: New Horizons Tweets</h1>
            <MiniVillagersList />
          </Route>
          <Route exact path="/villager/:name">
            <VillagerDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
