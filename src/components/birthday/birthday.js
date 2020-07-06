import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadBirthdayVillager } from "../../actions/actions";
import "./style.scss";
import MiniVillager from "../miniVillager/miniVillager";

class Birthday extends React.Component {
  constructor(props) {
    super(props);
    this.getBirthdayVillager = this.getBirthdayVillager.bind(this);
  }

  componentDidMount() {
    this.getBirthdayVillager();
  }

  componentDidUpdate() {
    console.log("b update", this.props.birthday);
    console.log("0", this.props.birthday[0]);
  }

  getBirthdayVillager() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    console.log("today", today);
    console.log("day/month", day, month);

    this.props.loadBirthdayVillager(day, month);
    console.log("b function", this.props.birthday);
    console.log("0", this.props.birthday[0]);
  }

  render() {
    return (
      <div className="birthday">
        TODAY IS{" "}
        {this.props.birthday.map((villager, index) => (
          <MiniVillager key={index} {...villager} />
        ))}{" "}
        BIRTHDAY!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    birthday: state.birthday,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadBirthdayVillager: (day, month) =>
    dispatch(loadBirthdayVillager(day, month)),
});

Birthday.propTypes = {
  birthday: PropTypes.array,
  loadBirthdayVillager: PropTypes.func,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Birthday)
);
