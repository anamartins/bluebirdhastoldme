import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadMoreTweets } from "../../actions/actions";

class LoadMoreTweets extends React.Component {
  constructor(props) {
    super(props);
    this.target = React.createRef();
    this.initObserver = this.initObserver.bind(this);
    this.onTargetReach = this.onTargetReach.bind(this);
  }

  componentDidMount() {
    this.initObserver();
  }

  initObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    let observer = new IntersectionObserver(this.onTargetReach, options);

    let target = this.target.current;
    observer.observe(target);
  }

  onTargetReach(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.props.loadMoreTweets(this.props.slug, this.props.moreTweetsURL);
      }
    });
  }

  render() {
    return (
      <div className="load-tweets" ref={this.target}>
        {this.props.loadingMore ? (
          <div className="loading">LOADING</div>
        ) : (
          "FIM"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  return {
    slug,
    loadingMore: state.loadingMore,
    moreTweetsURL: state.moreTweetsURL,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadMoreTweets: (name, url) => dispatch(loadMoreTweets(name, url)),
});

LoadMoreTweets.propTypes = {
  loadingMore: PropTypes.bool,
  moreTweetsURL: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoadMoreTweets)
);
