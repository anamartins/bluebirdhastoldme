import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSingleVillager } from "../actions/actions";
import TweetsList from "../components/tweetsList";
import Header from "../components/header";
import Footer from "../components/footer";
import "./style.scss";

class VillagersDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadSingleVillager(this.props.name);
  }
  render() {
    const { name, villager } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <div className="villager-content">
          <div className="villager-details">
            <div className="villager-photo">
              <img src={`/img/photos/villagers/${villager.photo}`} />
            </div>
            <div className="data">
              <h1>{villager.name}</h1>
              <p>
                <img src="../img/site/smile.png" />
                <a href={`../?species=${villager.species}`}>
                  {" "}
                  {villager.species}
                </a>
                , {"  "}
                <a href={`../?gender=${villager.gender}`}> {villager.gender}</a>
              </p>

              <p>
                <img src="../img/site/heart.png" />
                {/* {villager.gender === "Female" ? "She has a  " : "He has a  "} */}
                <a href={`../?personality=${villager.personality}`}>
                  {villager.personality}
                </a>
              </p>
              <p>
                <img src="../img/site/birthday.png" />

                <a href={`../?birthdayMonth=${villager.birthdayMonth}`}>
                  {villager.birthday}
                </a>
              </p>
              <p>
                <img src="../img/site/sun.png" />

                <a href={`../?sunSign=${villager.sunSign}`}>
                  {villager.sunSign}
                </a>
              </p>
            </div>
          </div>
          <TweetsList />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name;

  return {
    name,
    villager: state.singleVillager,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadSingleVillager: (name) => dispatch(loadSingleVillager(name)),
});

VillagersDetails.propTypes = {
  name: PropTypes.string,
  loadSingleVillager: PropTypes.func,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VillagersDetails)
);
