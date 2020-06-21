import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { loadSingleVillager } from "../../actions/actions";
import "./style.scss";
import cake from "./img/birthday.png";
import heart from "./img/heart.png";
import smile from "./img/smile.png";
import sun from "./img/sun.png";
import { IMG_BASE_URL } from "../../config/config";

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
          <img src={`${IMG_BASE_URL}/img/photos/villagers/${villager.photo}`} />
        </div>
        <div className="data">
          <h1>{villager.name}</h1>
          <p>
            <img src={smile} />
            <Link to={`/?species=${villager.species}`}>
              {" "}
              {villager.species}
            </Link>
            , {"  "}
            <Link
              className="villager-gender"
              to={`/?gender=${villager.gender}`}
            >
              {" "}
              {villager.gender}
            </Link>
          </p>

          <p>
            <img src={heart} />
            <Link to={`/?personality=${villager.personality}`}>
              {villager.personality}
            </Link>
          </p>
          <p>
            <img src={cake} />

            <Link to={`/?birthdayMonth=${villager.birthdayMonth}`}>
              {villager.birthday}
            </Link>
          </p>
          <p>
            <img src={sun} />

            <Link to={`/?sunSign=${villager.sunSign}`}>{villager.sunSign}</Link>
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
