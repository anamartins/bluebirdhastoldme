import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillager from "../miniVillager/miniVillager";
import { withRouter } from "react-router-dom";

class MiniVillagersList extends React.Component {
  constructor(props) {
    super(props);
    this.getVillagersArray = this.getVillagersArray.bind(this);
  }

  getVillagersArray(array) {
    return array.map((villager, index) => (
      <MiniVillager key={index} {...villager} />
    ));
  }

  render() {
    const { villagers, filteredVillagers, loading, title } = this.props;
    return (
      <div className={title === undefined ? "villagers" : "villagers-filter"}>
        {loading ? (
          <div className="loading">LOADING</div>
        ) : filteredVillagers.length !== 0 ? (
          this.getVillagersArray(filteredVillagers)
        ) : (
          this.getVillagersArray(villagers)
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ villagers, filteredVillagers, loading }) => ({
  villagers,
  filteredVillagers,
  loading,
});

MiniVillagersList.propTypes = {
  villagers: PropTypes.array,
  filteredVillagers: PropTypes.array,
  loading: PropTypes.bool,
  title: PropTypes.string,
};

export default withRouter(connect(mapStateToProps)(MiniVillagersList));
