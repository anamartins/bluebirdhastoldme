import axios from "axios";
const URL = "http://localhost:3000/";
const HASHTAGS = "#AnimalCrossing #ACNH #NintendoSwitch";

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
export const LOAD_TWEETS = "LOAD_TWEETS";
export const LOAD_TWEETS_SUCCESS = "LOAD_TWEETS_SUCCESS";
export const LOAD_TWEETS_ERROR = "LOAD_TWEETS_ERROR";
export const LOAD_MORE_TWEETS = "LOAD_MORE_TWEETS";
export const LOAD_MORE_TWEETS_SUCCESS = "LOAD_MORE_TWEETS_SUCCESS";
export const LOAD_MORE_TWEETS_ERROR = "LOAD_MORE_TWEETS_ERROR";

export const loadTweets = (name) => {
  return (dispatch) => {
    dispatch({ type: LOAD_TWEETS });
    axios
      .get(`${URL}tweets/${name}`)
      .then((res) => {
        const tweets = res.data.tweets;
        const moreTweetsURL = res.data.next_results;
        dispatch({ type: LOAD_TWEETS_SUCCESS, tweets, moreTweetsURL });
      })
      .catch((error) => {
        console.log("erro loop 1", error);
        dispatch({ type: LOAD_TWEETS_ERROR });
      });
  };
};

export const loadMoreTweets = (name, url) => {
  return (dispatch) => {
    dispatch({ type: LOAD_MORE_TWEETS });
    axios
      .get(`${URL}tweets/${name}${url}`)
      .then((res) => {
        const tweets = res.data.tweets;
        const moreTweetsURL = res.data.next_results;
        dispatch({ type: LOAD_MORE_TWEETS_SUCCESS, tweets, moreTweetsURL });
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({ type: LOAD_MORE_TWEETS_ERROR });
      });
  };
};

export const loadFilteredVillagers = (filter, value) => {
  return (dispatch) => {
    dispatch({ type: LOAD_FILTERED_VILLAGERS });
    axios
      .get(`${URL}villagers?${filter}=${value}`)
      .then((res) => {
        const filteredVillagers = res.data;
        console.log("filtered villagers action", filteredVillagers);
        dispatch({ type: LOAD_FILTERED_VILLAGERS_SUCCESS, filteredVillagers });
      })
      .catch(() => {
        dispatch({ type: LOAD_FILTERED_VILLAGERS_ERROR });
      });
  };
};

export const loadVillagers = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_VILLAGERS });
    axios
      .get(`${URL}villagers`)
      .then((res) => {
        const villagers = res.data;
        console.log("os villagers", villagers);
        dispatch({ type: LOAD_VILLAGERS_SUCCESS, villagers });
      })
      .catch(() => {
        dispatch({ type: LOAD_VILLAGERS_ERROR });
      });
  };
};

export const loadSingleVillager = (name) => {
  return (dispatch) => {
    dispatch({ type: LOAD_SINGLE_VILLAGER });
    axios
      .get(URL + "villagers/" + name)
      .then((res) => {
        const villager = res.data;
        console.log("single villager", villager);
        dispatch({ type: LOAD_SINGLE_VILLAGER_SUCCESS, villager });
        console.log("res", res);
      })
      .catch(() => {
        dispatch({ type: LOAD_SINGLE_VILLAGER_ERROR });
      });
  };
};
