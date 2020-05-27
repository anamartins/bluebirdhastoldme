import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSingleVillager } from "../../actions/actions";
import "./style.scss";
import cake from "./img/birthday.png";
import heart from "./img/heart.png";
import smile from "./img/smile.png";
import sun from "./img/sun.png";

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
            <img src={smile} />
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
            <img src={heart} />
            <a href={`../?personality=${villager.personality}`}>
              {villager.personality}
            </a>
          </p>
          <p>
            <img src={cake} />

            <a href={`../?birthdayMonth=${villager.birthdayMonth}`}>
              {villager.birthday}
            </a>
          </p>
          <p>
            <img src={sun} />

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
