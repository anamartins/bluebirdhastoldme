import axios from "axios";
const URL = "http://localhost:3000/";

export const LOAD_VILLAGERS = "LOAD_VILLAGERS";
export const LOAD_VILLAGERS_SUCCESS = "LOAD_VILLAGERS_SUCCESS";
export const LOAD_VILLAGERS_ERROR = "LOAD_VILLAGERS_ERROR";
export const LOAD_SINGLE_VILLAGER = "LOAD_SINGLE_VILLAGER";
export const LOAD_SINGLE_VILLAGER_ERROR = "LOAD_SINGLE_VILLAGER_ERROR";
export const LOAD_SINGLE_VILLAGER_SUCCESS = "LOAD_SINGLE_VILLAGER_SUCCESS";

export const loadVillagers = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_VILLAGERS });
    axios
      .get(URL + "villagers")
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
