import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loadSearchVillagers } from "../../actions/actions";

import "./style.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      wantedVillagers: [],
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.filterVillagers = this.filterVillagers.bind(this);
  }

  filterVillagers(term) {
    let searchArray = [];
    this.props.villagers.map((villager, index) => {
      //FILTER
      if (villager.name.includes(term)) {
        console.log("YAY", term, villager.name, index);
        searchArray.push(villager);
      }

      //this map (which actually should be a filter) should be on reducer.
    });

    console.log("searchArray", searchArray);
    this.props.loadSearchVillagers(searchArray);
  }

  onTextChange(event) {
    this.filterVillagers(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Type a villager name here..."
          size="34"
          value={this.state.value}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ villagers, filteredVillagers, loading }) => ({
  villagers,
  filteredVillagers,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadSearchVillagers: (searchArray) =>
    dispatch(loadSearchVillagers(searchArray)),
});

Search.propTypes = {
  villagers: PropTypes.array,
  loading: PropTypes.bool,
  loadSearchVillagers: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
