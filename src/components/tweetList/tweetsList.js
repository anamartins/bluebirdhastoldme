import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadTweets, loadMoreTweets } from "../../actions/actions";
import Tweet from "../tweet/tweet";

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("name", this.props.name);
    this.props.loadTweets(this.props.name);
  }

  onButtonClick() {
    console.log("hey hey hey");
    this.props.loadMoreTweets(this.props.name, this.props.moreTweetsURL);
  }

  render() {
    const { tweets, loading, loadingMore } = this.props;

    return (
      <div className="tweets">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)
        )}

        <div className="button-more">
          {loadingMore ? (
            <div className="loading">LOADING</div>
          ) : (
            <button type="button" onClick={this.onButtonClick}>
              SEE MORE
            </button>
          )}
        </div>
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
