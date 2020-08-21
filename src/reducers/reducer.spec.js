import reducer, { defaultState } from "./reducer";
import {
  LOAD_VILLAGERS,
  LOAD_VILLAGERS_SUCCESS,
  LOAD_VILLAGERS_ERROR,
  LOAD_FILTERED_VILLAGERS,
  LOAD_FILTERED_VILLAGERS_SUCCESS,
  LOAD_FILTERED_VILLAGERS_ERROR,
  LOAD_VILLAGER_DETAILS,
  LOAD_VILLAGER_DETAILS_SUCCESS,
  LOAD_VILLAGER_DETAILS_ERROR,
  LOAD_MORE_TWEETS,
  LOAD_MORE_TWEETS_SUCCESS,
  LOAD_MORE_TWEETS_ERROR,
  LOAD_SEARCH_VILLAGERS,
  LOAD_BIRTHDAY_VILLAGER_SUCCESS,
  LOAD_BIRTHDAY_VILLAGER_ERROR,
} from "../actions/actions";

test("should set state.loading to true when loading villagers", () => {
  const state = reducer(defaultState, { type: LOAD_VILLAGERS });
  expect(state.loading).toBe(true);
});

test("should set state.loading to false, villagers to an array and filteredVillagers to an empty array", () => {
  const action = {
    type: LOAD_VILLAGERS_SUCCESS,
    villagers: [{ name: "Flo" }, { name: "Benedict" }, { name: "Flora" }],
  };
  const state = reducer(defaultState, action);
  expect(state.loading).toBe(false);
  expect(state.villagers).toBe(action.villagers);
  expect(state.filteredVillagers).toEqual([]);
});

test("should set a specific error message", () => {
  const state = reducer(defaultState, { type: LOAD_VILLAGERS_ERROR });
  expect(state.message).toBe("error on loading villagers");
});

test("should set state.loading to true, and filteredVillagers to an empty array", () => {
  const state = reducer(defaultState, { type: LOAD_FILTERED_VILLAGERS });
  expect(state.loading).toBe(true);
  expect(state.filteredVillagers).toEqual([]);
});

test("should set state.loading to false, and filteredVillagers to an array", () => {
  const action = {
    type: LOAD_FILTERED_VILLAGERS_SUCCESS,
    filteredVillagers: [
      { name: "Flo" },
      { name: "Benedict" },
      { name: "Flora" },
    ],
  };
  const state = reducer(defaultState, action);
  expect(state.loading).toBe(false);
  expect(state.filteredVillagers).toEqual(action.filteredVillagers);
});

test("should set a specific error message", () => {
  const state = reducer(defaultState, { type: LOAD_FILTERED_VILLAGERS_ERROR });
  expect(state.message).toBe("error! we cannot load these group of villagers");
});

test("should set state.loading to true and state.singleVillager to an empty object", () => {
  const action = {
    type: LOAD_VILLAGER_DETAILS,
    singleVillager: {},
  };
  const state = reducer(defaultState, action);

  expect(state.loading).toBe(true);
  expect(state.singleVillager).toEqual(action.singleVillager);
});

test("should set a specific error message", () => {
  const state = reducer(defaultState, { type: LOAD_VILLAGER_DETAILS_ERROR });
  expect(state.message).toBe("error. cannot load villager details. :(");
});

test("should set state.singleVillager to be an object", () => {
  const action = {
    type: LOAD_VILLAGER_DETAILS_SUCCESS,
    villager: { name: "Flo" },
    tweets: [],
    moreTweetsURL: "URL",
  };
  const state = reducer(defaultState, action);
  expect(state.loading).toBe(false);
  expect(state.singleVillager).toEqual(action.villager);
  expect(state.tweets).toEqual(action.tweets);
  expect(state.moreTweetsURL).toBe(action.moreTweetsURL);
  expect(state.showLoadMoreDiv).toBe(true);
});

test("should set state.loading to true when loading villagers", () => {
  const state = reducer(defaultState, { type: LOAD_MORE_TWEETS });
  expect(state.loadingMore).toBe(true);
});

test("should set state.loadingMore to false, tweets to an not empty array and moreTweetsURL to a string", () => {
  const action = {
    type: LOAD_MORE_TWEETS_SUCCESS,
    loadingMore: false,
    tweets: [],
    moreTweetsURL: "URL",
  };
  const state = reducer(defaultState, action);
  expect(state.loadingMore).toBe(action.loadingMore);
  expect(state.tweets).toEqual(action.tweets);
  expect(state.moreTweetsURL).toBe(action.moreTweetsURL);
});

test("should set a specific error message", () => {
  const state = reducer(defaultState, { type: LOAD_MORE_TWEETS_ERROR });
  expect(state.message).toBe(
    "bad bad server. cannot load more tweets for you."
  );
});

test("should set state.filteredVillagers to an array", () => {
  const action = {
    type: LOAD_SEARCH_VILLAGERS,
    filteredVillagers: [
      { name: "Flip" },
      { name: "Flo" },
      { name: "Flora" },
      { name: "Flurry" },
      { name: "Truffles" },
    ],
    word: "Fl",
  };
  const state = reducer(defaultState, action);
  const filteredVillagers = state.villagers.filter((villager) => {
    return villager.name.match(new RegExp(action.word, "i"));
  });
  expect(state.filteredVillagers).toEqual(filteredVillagers);
});

test("should set state.birthday to an array", () => {
  const action = {
    type: LOAD_BIRTHDAY_VILLAGER_SUCCESS,
    birthdayVillagers: [{ name: "Flo" }, { name: "Benedict" }],
  };
  const state = reducer(defaultState, action);
  expect(state.birthday).toEqual(action.birthdayVillagers);
});

test("should set a specific error message", () => {
  const state = reducer(defaultState, { type: LOAD_BIRTHDAY_VILLAGER_ERROR });
  expect(state.message).toBe(
    "bad bad server. cannot load the birthday villagers for you."
  );
});
