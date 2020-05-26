import React from "react";
import TweetsList from "../../components/tweetList/tweetsList";
import Header from "../../components/header/header";
import VillagerData from "../../components/villagerData/villagerData";
import "./style.scss";

class VillagersDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="villager-content">
          <VillagerData />

          <TweetsList />
        </div>
      </div>
    );
  }
}

export default VillagersDetails;
