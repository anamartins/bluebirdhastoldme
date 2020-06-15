import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadTweets, loadMoreTweets } from "../../actions/actions";
import Tweet from "../tweet/tweet";

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.initObserver = this.initObserver.bind(this);
    this.onTargetReach = this.onTargetReach.bind(this);
  }

  componentDidMount() {
    this.props.loadTweets(this.props.name);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.moreTweetsURL === null && this.props.moreTweetsURL) {
      this.initObserver();
    }
  }

  initObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    let observer = new IntersectionObserver(this.onTargetReach, options);

    let target = document.querySelector("#target");
    observer.observe(target);
  }

  onTargetReach(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.props.loadMoreTweets(this.props.name, this.props.moreTweetsURL);
      }
    });
  }

  render() {
    const { tweets, loading, loadingMore, moreTweetsURL } = this.props;

    return (
      <div className="tweets">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)
        )}

        {moreTweetsURL && (
          <div className="load-tweets" id="target">
            {loadingMore ? <div className="loading">LOADING</div> : null}
          </div>
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
    loadingMore: state.loadingMore,
    moreTweetsURL: state.moreTweetsURL,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadTweets: (name) => dispatch(loadTweets(name)),
  loadMoreTweets: (name, url) => dispatch(loadMoreTweets(name, url)),
});

TweetsList.propTypes = {
  loadTweets: PropTypes.func,
  loadMoreTweets: PropTypes.func,
  loading: PropTypes.bool,
  loadingMore: PropTypes.bool,
  moreTweetsURL: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TweetsList)
);
