import axios from "axios";
import { API_BASE_URL } from "../../config/config.js";

export const LOAD_VILLAGERS = "LOAD_VILLAGERS";
export const LOAD_VILLAGERS_SUCCESS = "LOAD_VILLAGERS_SUCCESS";
export const LOAD_VILLAGERS_ERROR = "LOAD_VILLAGERS_ERROR";
export const LOAD_SINGLE_VILLAGER = "LOAD_SINGLE_VILLAGER";
export const LOAD_SINGLE_VILLAGER_ERROR = "LOAD_SINGLE_VILLAGER_ERROR";
export const LOAD_SINGLE_VILLAGER_SUCCESS = "LOAD_SINGLE_VILLAGER_SUCCESS";
export const LOAD_FILTERED_VILLAGERS = "LOAD_FILTERED_VILLAGERS";
export const LOAD_FILTERED_VILLAGERS_SUCCESS =
  "LOAD_FILTERED_VILLAGERS_SUCCESS";
export const LOAD_FILTERED_VILLAGERS_ERROR = "LOAD_FILTERED_VILLAGERS_ERROR";
export const LOAD_VILLAGER_DETAILS = "LOAD_VILLAGER_DETAILS";
export const LOAD_VILLAGER_DETAILS_SUCCESS = "LOAD_VILLAGER_DETAILS_SUCCESS";
export const LOAD_VILLAGER_DETAILS_ERROR = "LOAD_VILLAGER_DETAILS_ERROR";
export const LOAD_MORE_TWEETS = "LOAD_MORE_TWEETS";
export const LOAD_MORE_TWEETS_SUCCESS = "LOAD_MORE_TWEETS_SUCCESS";
export const LOAD_MORE_TWEETS_ERROR = "LOAD_MORE_TWEETS_ERROR";
export const LOAD_SEARCH_VILLAGERS = "LOAD_SEARCH_VILLAGERS";
export const LOAD_BIRTHDAY_VILLAGER = "LOAD_BIRTHDAY_VILLAGER";
export const LOAD_BIRTHDAY_VILLAGER_SUCCESS = "LOAD_BIRTHDAY_VILLAGER_SUCCESS";
export const LOAD_BIRTHDAY_VILLAGER_ERROR = "LOAD_BIRTHDAY_VILLAGER_ERROR";

export const loadVillagerDetails = (name) => {
  return (dispatch) => {
    dispatch({ type: LOAD_VILLAGER_DETAILS });
    return axios
      .get(`${API_BASE_URL}tweets/${name}`)
      .then((res) => {
        const villager = res.data.villager;
        const tweets = res.data.tweets;
        const moreTweetsURL = res.data.next_results;
        dispatch({
          type: LOAD_VILLAGER_DETAILS_SUCCESS,
          villager,
          tweets,
          moreTweetsURL,
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_VILLAGER_DETAILS_ERROR });
      });
  };
};

export const loadMoreTweets = (slug, url) => {
  return (dispatch) => {
    dispatch({ type: LOAD_MORE_TWEETS });
    return axios
      .get(`${API_BASE_URL}tweets/${slug}${url}`)
      .then((res) => {
        const tweets = res.data.tweets;
        const moreTweetsURL = res.data.next_results;
        dispatch({ type: LOAD_MORE_TWEETS_SUCCESS, tweets, moreTweetsURL });
      })
      .catch((error) => {
        dispatch({ type: LOAD_MORE_TWEETS_ERROR });
      });
  };
};

export const loadFilteredVillagers = (filter, value) => {
  return (dispatch) => {
    dispatch({ type: LOAD_FILTERED_VILLAGERS });
    return axios
      .get(`${API_BASE_URL}villagers?${filter}=${value}`)
      .then((res) => {
        const filteredVillagers = res.data;
        dispatch({ type: LOAD_FILTERED_VILLAGERS_SUCCESS, filteredVillagers });
      })
      .catch(() => {
        dispatch({ type: LOAD_FILTERED_VILLAGERS_ERROR });
      });
  };
};

export const loadBirthdayVillager = (day, month) => {
  return (dispatch) => {
    dispatch({ type: LOAD_BIRTHDAY_VILLAGER });
    return axios
      .get(`${API_BASE_URL}villagers?birthdayDay=${day}&birthdayMonth=${month}`)
      .then((res) => {
        const birthdayVillagers = res.data;
        dispatch({
          type: LOAD_BIRTHDAY_VILLAGER_SUCCESS,
          birthdayVillagers,
        });
      })
      .catch(() => {
        dispatch({ type: LOAD_BIRTHDAY_VILLAGER_ERROR });
      });
  };
};

export const loadVillagers = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_VILLAGERS });
    return axios
      .get(`${API_BASE_URL}villagers`)
      .then((res) => {
        const villagers = res.data;
        dispatch({ type: LOAD_VILLAGERS_SUCCESS, villagers });
      })
      .catch(() => {
        dispatch({ type: LOAD_VILLAGERS_ERROR });
      });
  };
};

export const loadSearchVillagers = (word) => {
  return (dispatch) => {
    dispatch({ type: LOAD_SEARCH_VILLAGERS, word });
  };
};
