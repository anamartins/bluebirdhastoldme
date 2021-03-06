import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadVillagers,
  loadFilteredVillagers,
  loadMusicName,
} from "../../actions/actions";
import MiniVillagersList from "../../components/miniVillagerList/miniVillagersList";
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import Birthday from "../../components/birthday/birthday";
import "./style.scss";

class MiniVillagersView extends React.Component {
  constructor(props) {
    super(props);

    this.getH2 = this.getH2.bind(this);
  }

  componentDidMount() {
    if (this.props.filter[0] === "favSong") {
      this.props.loadMusicName(this.props.value[0]);
    }
    if (this.props.filter[0] !== "") {
      this.props.loadFilteredVillagers(this.props.filter, this.props.value);
    } else {
      this.props.loadVillagers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter[0] !== "" && this.props.filter[0] === "") {
      this.props.loadVillagers();
    }
  }

  getH2(filter, value) {
    if (value[0]) {
      switch (filter[0]) {
        case "birthdayMonth": {
          const monthsArray = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "November",
            "December",
          ];
          let month = monthsArray[value[0] - 1];
          return <h2>Birthdays of {month}</h2>;
        }
        case "favSong":
          return <h2>{this.props.song} fans</h2>;

        default:
          return <h2>{value} characters</h2>;
      }
    }
    return (
      <div className="search-birthday">
        <Search />
        <Birthday />
      </div>
    );
  }

  render() {
    const { filter, value } = this.props;
    return (
      <div className="wrapper">
        <Header />
        {this.getH2(filter, value)}
        <MiniVillagersList title={value[0]} />
      </div>
    );
  }
}

const mapStateToProps = (
  { villagers, filteredVillagers, loading, song },
  ownProps
) => {
  let search = ownProps.location.search;
  search = search.slice(1).split("&");

  let filters = search.reduce((finalObj, item) => {
    item = item.split("=");
    finalObj[item[0]] = item[1];
    return finalObj;
  }, {});

  let filter = Object.keys(filters);
  let value = Object.values(filters);

  return { filter, value, villagers, filteredVillagers, loading, song };
};
const mapDispatchToProps = (dispatch) => ({
  loadVillagers: () => dispatch(loadVillagers()),
  loadFilteredVillagers: (filter, value) =>
    dispatch(loadFilteredVillagers(filter, value)),
  loadMusicName: (slug) => dispatch(loadMusicName(slug)),
});

MiniVillagersList.propTypes = {
  loadVillagers: PropTypes.func,
  loadFilteredVillagers: PropTypes.func,
  filter: PropTypes.object,
  value: PropTypes.object,
  villagers: PropTypes.array,
  filteredVillagers: PropTypes.array,
  loading: PropTypes.bool,
  song: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MiniVillagersView)
);
