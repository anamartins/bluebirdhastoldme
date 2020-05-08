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
} from "../actions/actions";

const defaultState = {
  loading: false,
  message: null,
  villagers: [],
  singleVillager: {},
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

    default:
      return state;
  }
};

export default reducer;
