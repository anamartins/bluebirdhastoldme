import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadVillagerDetails } from "../../actions/actions";
import Header from "../../components/header/header";
import TweetsList from "../../components/tweetList/tweetsList";
import VillagerData from "../../components/villagerData/villagerData";
import "./style.scss";

class VillagersDetails extends React.Component {
  constructor(props) {
    super(props);
    this.renderVillagerData = this.renderVillagerData.bind(this);
  }

  componentDidMount() {
    this.props.loadVillagerDetails(this.props.slug);
  }

  renderVillagerData() {
    return (
      <div className="villager-content">
        <VillagerData />
        <TweetsList />
      </div>
    );
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="wrapper">
        <Header />
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          this.renderVillagerData()
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;

  return {
    slug,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadVillagerDetails: (name) => dispatch(loadVillagerDetails(name)),
});

VillagersDetails.propTypes = {
  slug: PropTypes.string,
  loading: PropTypes.bool,
  loadVillagerDetails: PropTypes.func,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VillagersDetails)
);
