import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tweet from "../tweet/tweet";
import LoadMoreTweets from "../loadMoreTweets/loadMoreTweets";
import "./style.scss";

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tweets, loading, showLoadMoreDiv } = this.props;

    return (
      <div className="tweets">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)
        )}
        {showLoadMoreDiv && <LoadMoreTweets />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  return {
    slug,
    tweets: state.tweets,
    loading: state.loading,
    showLoadMoreDiv: state.showLoadMoreDiv,
  };
};

TweetsList.propTypes = {
  slug: PropTypes.string,
  tweets: PropTypes.array,
  loading: PropTypes.bool,
  showLoadMoreDiv: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps)(TweetsList));
