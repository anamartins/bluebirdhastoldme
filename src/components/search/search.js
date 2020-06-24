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
    this.onEraseClickButton = this.onEraseClickButton.bind(this);
  }

  filterVillagers(word) {
    this.props.loadSearchVillagers(word);
  }

  onTextChange(event) {
    this.filterVillagers(event.target.value);
    this.setState({ value: event.target.value });
  }

  onEraseClickButton() {
    if (this.state.value.length !== 0) {
      this.filterVillagers(event.target.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="search">
        <label htmlFor="search">
          What people are saying on Twitter about your favorite Animal Crossing:
          New Horizons villager?
        </label>
        <div className="textBoxCombo">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type a villager name here..."
            size="34"
            value={this.state.value}
            onChange={this.onTextChange}
          />
          <button id="erase" onClick={this.onEraseClickButton}>
            X
          </button>
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  loadSearchVillagers: (searchArray) =>
    dispatch(loadSearchVillagers(searchArray)),
});

Search.propTypes = {
  villagers: PropTypes.array,
  filteredVillagers: PropTypes.array,
  loading: PropTypes.bool,
  emptySearch: PropTypes.bool,
  loadSearchVillagers: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
