import React from "react";
import PropTypes from "prop-types";
import MiniVillagersList from "../../components/miniVillagerList/miniVillagersList";
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import Birthday from "../../components/birthday/birthday";
import { loadVillagers, loadFilteredVillagers } from "../../actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MiniVillagersView extends React.Component {
  constructor(props) {
    super(props);

    this.getH2 = this.getH2.bind(this);
  }

  componentDidMount() {
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
      if (filter[0] === "birthdayMonth") {
        switch (value[0]) {
          case "1":
            return <h2>Birthdays of January</h2>;
          case "2":
            return <h2>Birthdays of February</h2>;
          case "3":
            return <h2>Birthdays of March</h2>;
          case "4":
            return <h2>Birthdays of Abril</h2>;
          case "5":
            return <h2>Birthdays of May</h2>;
          case "6":
            return <h2>Birthdays of June</h2>;
          case "7":
            return <h2>Birthdays of July</h2>;
          case "8":
            return <h2>Birthdays of August</h2>;
          case "9":
            return <h2>Birthdays of September</h2>;
          case "10":
            return <h2>Birthdays of October</h2>;
          case "11":
            return <h2>Birthdays of November</h2>;
          case "12":
            return <h2>Birthdays of December</h2>;
        }
      } else {
        return <h2>{value} characters</h2>;
      }
    } else {
      return <Search />;
    }
  }

  render() {
    const { filter, value } = this.props;
    return (
      <div className="wrapper">
        <Header />
        {this.getH2(filter, value)}
        <Birthday />
        <MiniVillagersList title={value[0]} />
      </div>
    );
  }
}

const mapStateToProps = (
  { villagers, filteredVillagers, loading },
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

  return { filter, value, villagers, filteredVillagers, loading };
};
const mapDispatchToProps = (dispatch) => ({
  loadVillagers: () => dispatch(loadVillagers()),
  loadFilteredVillagers: (filter, value) =>
    dispatch(loadFilteredVillagers(filter, value)),
});

MiniVillagersList.propTypes = {
  loadVillagers: PropTypes.func,
  loadFilteredVillagers: PropTypes.func,
  filter: PropTypes.object,
  value: PropTypes.object,
  villagers: PropTypes.array,
  filteredVillagers: PropTypes.array,
  loading: PropTypes.bool,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MiniVillagersView)
);
