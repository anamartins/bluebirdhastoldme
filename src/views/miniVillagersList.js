import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillager from "../components/miniVillager";
import { withRouter } from "react-router-dom";
import { loadVillagers, loadFilteredVillagers } from "../actions/actions";

class MiniVillagersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.filter !== undefined) {
      console.log("oooi", this.props.filter);
      console.log("eooi", this.props.value);
      this.props.loadFilteredVillagers(this.props.filter, this.props.value);
    } else {
      console.log("else");
      this.props.loadVillagers();
    }
  }

  render() {
    const { villagers, loading } = this.props;
    return (
      <div className="villagers">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          villagers.map((villager, index) => (
            <MiniVillager key={index} {...villager} />
          ))
        )}
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
  villagers: PropTypes.array,
  loadVillagers: PropTypes.func,
  loadFilteredVillagers: PropTypes.func,
  loading: PropTypes.bool,
  filter: PropTypes.string,
  value: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MiniVillagersList)
);
