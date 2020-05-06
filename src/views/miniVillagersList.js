import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MiniVillager from "../components/miniVillager";
import { loadVillagers } from "../actions/actions";

class MiniVillagersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadVillagers();
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

const mapStateToProps = ({ villagers, loading }) => ({ villagers, loading });
const mapDispatchToProps = (dispatch) => ({
  loadVillagers: () => dispatch(loadVillagers()),
});

MiniVillagersList.propTypes = {
  villagers: PropTypes.array,
  loadVillagers: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniVillagersList);
