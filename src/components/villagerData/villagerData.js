import React from "react";
import PropTypes from "prop-types";
import { IMG_BASE_URL } from "../../../config/config";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import cake from "./img/birthday.png";
import heart from "./img/heart.png";
import smile from "./img/smile.png";
import sun from "./img/sun.png";
import "./style.scss";

class VillagerData extends React.Component {
  constructor(props) {
    super(props);
    this.loadVillagerPoster = this.loadVillagerPoster.bind(this);
  }

  loadVillagerPoster(poster) {
    if (poster !== undefined) {
      return `${IMG_BASE_URL}/img/posters/villagers/${poster}`;
    }
  }

  render() {
    const { villager } = this.props;
    return (
      <div className="villager-details">
        <div className="villager-photo">
          <img src={this.loadVillagerPoster(villager.poster)} />
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
          <p>
            <Link to={`/?favSong=${villager.favSong}`}>{villager.favSong}</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;

  return {
    slug,
    villager: state.singleVillager,
  };
};

VillagerData.propTypes = {
  slug: PropTypes.string,
  villager: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(VillagerData));
