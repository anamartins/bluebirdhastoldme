import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSingleVillager } from "../../actions/actions";
import "./style.scss";

class VillagerData extends React.Component {
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
            </a>, {"  "}
            <a
              className="villager-gender"
              href={`../?gender=${villager.gender}`}
            >
              {" "}
              {villager.gender}
            </a>
          </p>

          <p>
            <img src="../img/site/heart.png" />
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

            <a href={`../?sunSign=${villager.sunSign}`}>{villager.sunSign}</a>
          </p>
        </div>
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

VillagerData.propTypes = {
  name: PropTypes.string,
  loadSingleVillager: PropTypes.func,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VillagerData)
);
