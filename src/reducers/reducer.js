import {
  LOAD_VILLAGERS,
  LOAD_VILLAGERS_SUCCESS,
  LOAD_VILLAGERS_ERROR,
  LOAD_FILTERED_VILLAGERS,
  LOAD_FILTERED_VILLAGERS_SUCCESS,
  LOAD_FILTERED_VILLAGERS_ERROR,
  LOAD_BIRTHDAY_VILLAGER,
  LOAD_BIRTHDAY_VILLAGER_SUCCESS,
  LOAD_BIRTHDAY_VILLAGER_ERROR,
  LOAD_VILLAGER_DETAILS,
  LOAD_VILLAGER_DETAILS_SUCCESS,
  LOAD_VILLAGER_DETAILS_ERROR,
  LOAD_MORE_TWEETS,
  LOAD_MORE_TWEETS_SUCCESS,
  LOAD_MORE_TWEETS_ERROR,
  LOAD_SEARCH_VILLAGERS,
} from "../actions/actions";

export const defaultState = {
  loading: false,
  loadingMore: false,
  showLoadMoreDiv: false,
  message: null,
  villagers: [],
  filteredVillagers: [],
  singleVillager: {},
  tweets: [],
  moreTweetsURL: null,
  emptySearch: false,
  birthday: [],
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
        filteredVillagers: [],
      };

    case LOAD_VILLAGERS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_FILTERED_VILLAGERS:
      return {
        ...state,
        loading: true,
        filteredVillagers: [],
      };

    case LOAD_FILTERED_VILLAGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredVillagers: action.filteredVillagers,
      };

    case LOAD_FILTERED_VILLAGERS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_VILLAGER_DETAILS:
      return {
        ...state,
        loading: true,
        singleVillager: {},
      };

    case LOAD_VILLAGER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        singleVillager: action.villager,
        tweets: action.tweets.filter((tweet, index) => {
          return tweet.extended_entities;
        }),
        moreTweetsURL: action.moreTweetsURL,
        showLoadMoreDiv: true,
      };

    case LOAD_VILLAGER_DETAILS_ERROR:
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
        showLoadMoreDiv:
          action.moreTweetsURL !== null && action.moreTweetsURL !== undefined,
      };

    case LOAD_MORE_TWEETS_ERROR:
      return {
        ...state,
        message: "error",
      };

    case LOAD_SEARCH_VILLAGERS:
      const filteredVillagers = state.villagers.filter((villager) => {
        return villager.name.match(new RegExp(action.word, "i"));
      });
      return {
        ...state,
        filteredVillagers: filteredVillagers,
        emptySearch: filteredVillagers.length === 0,
      };

    case LOAD_BIRTHDAY_VILLAGER:
      return {
        ...state,
      };
    case LOAD_BIRTHDAY_VILLAGER_SUCCESS:
      return {
        ...state,
        birthday: action.birthdayVillagers,
      };

    case LOAD_BIRTHDAY_VILLAGER_ERROR:
      return {
        ...state,
        message: "error",
      };
    default:
      return state;
  }
};

export default reducer;
