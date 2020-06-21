import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillager from "../miniVillager/miniVillager";
import { withRouter } from "react-router-dom";

class MiniVillagersList extends React.Component {
  constructor(props) {
    super(props);
    this.loadVillagers = this.loadVillagers.bind(this);
    this.renderVillagers = this.renderVillagers.bind(this);
  }

  renderVillagers() {
    const { villagers, filteredVillagers, emptySearch } = this.props;

    if (filteredVillagers.length !== 0) {
      return this.loadVillagers(filteredVillagers);
    } else if (filteredVillagers.length === 0 && !emptySearch) {
      return this.loadVillagers(villagers);
    }
    if (filteredVillagers.length === 0 && emptySearch) {
      return <div>:(</div>;
    }
  }

  loadVillagers(array) {
    return array.map((villager, index) => (
      <MiniVillager key={index} {...villager} />
    ));
  }

  render() {
    const { loading, title } = this.props;
    return (
      <div className={title === undefined ? "villagers" : "villagers-filter"}>
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          this.renderVillagers()
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  villagers,
  filteredVillagers,
  loading,
  emptySearch,
}) => ({
  villagers,
  filteredVillagers,
  loading,
  emptySearch,
});

MiniVillagersList.propTypes = {
  villagers: PropTypes.array,
  filteredVillagers: PropTypes.array,
  loading: PropTypes.bool,
  emptySearch: PropTypes.bool,
  title: PropTypes.string,
};

export default withRouter(connect(mapStateToProps)(MiniVillagersList));
