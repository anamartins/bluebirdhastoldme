import {
  LOAD_VILLAGERS,
  LOAD_VILLAGERS_SUCCESS,
  LOAD_VILLAGERS_ERROR,
  LOAD_SINGLE_VILLAGER,
  LOAD_SINGLE_VILLAGER_SUCCESS,
  LOAD_SINGLE_VILLAGER_ERROR,
  LOAD_FILTERED_VILLAGERS,
  LOAD_FILTERED_VILLAGERS_SUCCESS,
  LOAD_FILTERED_VILLAGERS_ERROR,
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS,
  LOAD_TWEETS_ERROR,
  LOAD_MORE_TWEETS,
  LOAD_MORE_TWEETS_SUCCESS,
  LOAD_MORE_TWEETS_ERROR,
} from "../actions/actions";

const defaultState = {
  loading: false,
  loadingMore: false,
  message: null,
  villagers: [],
  singleVillager: {},
  tweets: [],
  moreTweetsURL: null,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_VILLAGERS:
      return {
        ...state,
        loading: true,
      };

    case LOAD_VILLAGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        villagers: action.villagers,
      };

    case LOAD_VILLAGERS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_SINGLE_VILLAGER:
      return {
        ...state,
        loading: true,
        singleVillager: {},
      };

    case LOAD_SINGLE_VILLAGER_SUCCESS:
      return {
        ...state,
        loading: false,
        singleVillager: action.villager,
      };

    case LOAD_SINGLE_VILLAGER_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_FILTERED_VILLAGERS:
      return {
        ...state,
        loading: true,
      };

    case LOAD_FILTERED_VILLAGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        villagers: action.filteredVillagers,
      };

    case LOAD_FILTERED_VILLAGERS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_TWEETS:
      return {
        ...state,
        loading: true,
      };

    case LOAD_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.tweets.filter((tweet, index) => {
          return tweet.extended_entities;
        }),
        moreTweetsURL: action.moreTweetsURL,
      };

    case LOAD_TWEETS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_MORE_TWEETS:
      return {
        ...state,
        loadingMore: true,
      };

    case LOAD_MORE_TWEETS_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        tweets: [
          ...state.tweets,
          ...action.tweets.filter((tweet, index) => {
            return tweet.extended_entities;
          }),
        ],
        moreTweetsURL: action.moreTweetsURL,
      };

    case LOAD_MORE_TWEETS_ERROR:
      return {
        ...state,
        message: "error",
      };
    default:
      return state;
  }
};

export default reducer;
