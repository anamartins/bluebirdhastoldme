import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillagersList from "../components/miniVillagersList";
import { withRouter } from "react-router-dom";
import { loadVillagers, loadFilteredVillagers } from "../actions/actions";

class MiniVillagersView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.filter !== undefined) {
      this.props.loadFilteredVillagers(this.props.filter, this.props.value);
    } else {
      this.props.loadVillagers();
      console.log(loadFilteredVillagers);
    }
  }

  render() {
    const { filter, value } = this.props;
    return (
      <div className="list">
        <h1>Animal Crossing New Horizons Tweets</h1>
        {filter ? <h2>{value} characters</h2> : ""}
        <MiniVillagersList />
      </div>
    );
  }
}

const mapStateToProps = ({ villagers, loading }, ownProps) => {
  const filter = ownProps.match.params.filter;
  const value = ownProps.match.params.value;

  let search = ownProps.location.search;
  search = search.slice(1);

  search = search.split("&");

  let filters = search.reduce((finalObj, item) => {
    item = item.split("=");
    finalObj[item[0]] = item[1];
    return finalObj;
  }, {});

  console.log("filterrrsss", filters);

  return { filter, value, villagers, loading };
};
const mapDispatchToProps = (dispatch) => ({
  loadVillagers: () => dispatch(loadVillagers()),
  loadFilteredVillagers: (filter, value) =>
    dispatch(loadFilteredVillagers(filter, value)),
});

MiniVillagersList.propTypes = {
  loadVillagers: PropTypes.func,
  loadFilteredVillagers: PropTypes.func,
  loading: PropTypes.bool,
  filter: PropTypes.string,
  value: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MiniVillagersView)
);
