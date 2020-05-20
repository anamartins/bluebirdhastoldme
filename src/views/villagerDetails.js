import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadSingleVillager } from "../actions/actions";
import TweetsList from "../components/tweetsList";
import Header from "../components/header";
import Footer from "../components/footer";
import VillagerData from "../components/villagerData";
import "./style.scss";

class VillagersDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.loadSingleVillager(this.props.name);
  // }
  render() {
    // const { name, villager } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <div className="villager-content">
          <VillagerData />

          <TweetsList />
        </div>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   const name = ownProps.match.params.name;

//   return {
//     name,
//     villager: state.singleVillager,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   loadSingleVillager: (name) => dispatch(loadSingleVillager(name)),
// });

// VillagersDetails.propTypes = {
//   name: PropTypes.string,
//   loadSingleVillager: PropTypes.func,
// };

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(VillagersDetails)
// );

export default VillagersDetails;
