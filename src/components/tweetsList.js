import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadTweets } from "../actions/actions";
import Tweet from "../components/tweet";

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("name", this.props.name);
    this.props.loadTweets(this.props.name);
  }

  render() {
    const { tweets, loading } = this.props;

    return (
      <div className="tweets">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name;
  return {
    name,
    tweets: state.tweets,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadTweets: (name) => dispatch(loadTweets(name)),
});

TweetsList.propTypes = {
  loadTweets: PropTypes.func,
  loading: PropTypes.bool,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TweetsList)
);
