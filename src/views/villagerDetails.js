import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
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
        <h1>{name}</h1>
        <img src={`/${villager.icon}`} />
        <p> Species: {villager.species}</p>
        <p>Gender: {villager.gender}</p>
        <p>Personality: {villager.personality}</p>
        <p>Birthday: {villager.birthday} </p>
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
