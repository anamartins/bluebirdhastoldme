import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSingleVillager } from "../actions/actions";

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
      <div className="villager-details">
        <h1>{villager.name}</h1>
        <img src={`/img/icons/villagers/${villager.icon}`} />
        <img src={`/img/photos/villagers/${villager.photo}`} />
        <p>
          Species: {` `}
          <a href={`../?species=${villager.species}`}> {villager.species}</a>
        </p>
        <p>
          Gender: {` `}
          <a href={`../?gender=${villager.gender}`}>{villager.gender}</a>
        </p>
        <p>
          Personality: {` `}
          <a href={`../?personality=${villager.personality}`}>
            {villager.personality}
          </a>
        </p>
        <p>
          Birthday:
          {` `}
          <a href={`../?birthdayMonth=${villager.birthdayMonth}`}>
            {villager.birthday}
          </a>
        </p>
        <p>
          Sun Sign: {` `}
          <a href={`../?sunSign=${villager.sunSign}`}>{villager.sunSign}</a>
        </p>
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
