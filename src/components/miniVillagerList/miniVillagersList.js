import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillager from "../miniVillager/miniVillager";
import { withRouter } from "react-router-dom";

class MiniVillagersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { villagers, loading, title } = this.props;
    return (
      <div className={title === undefined ? "villagers" : "villagers-filter"}>
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

const mapStateToProps = ({ villagers, loading }) => ({ villagers, loading });

MiniVillagersList.propTypes = {
  villagers: PropTypes.array,
  loading: PropTypes.bool,
  title: PropTypes.string,
};

export default withRouter(connect(mapStateToProps)(MiniVillagersList));
