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
  LOAD_BIRTHDAY_VILLAGER,
  LOAD_BIRTHDAY_VILLAGER_SUCCESS,
  LOAD_BIRTHDAY_VILLAGER_ERROR,
} from "../actions/actions";
import axios from "axios";

import {
  loadVillagerDetails,
  loadMoreTweets,
  loadFilteredVillagers,
  loadBirthdayVillager,
  loadVillagers,
  loadSearchVillagers,
} from "../actions/actions";

jest.mock("axios");
let dispatch = null;

beforeEach(() => {
  dispatch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test("should load villager details", () => {
  const resp = { data: { villager: {}, tweets: [], next_results: "results" } };
  axios.get.mockResolvedValue(resp);
  const action = loadVillagerDetails("Flora");

  return action(dispatch).then(() => {
    const dMockCallInitial = dispatch.mock.calls[0][0];
    const dMockCallSuccess = dispatch.mock.calls[1][0];

    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dMockCallInitial.type).toBe(LOAD_VILLAGER_DETAILS);
    expect(dMockCallSuccess.type).toBe(LOAD_VILLAGER_DETAILS_SUCCESS);
    expect(dMockCallSuccess.villager).toBe(resp.data.villager);
    expect(dMockCallSuccess.tweets).toBe(resp.data.tweets);
    expect(dMockCallSuccess.moreTweetsURL).toBe(resp.data.next_results);
  });
});

test("should dispatch LOAD_VILLAGERS_DETAILS_ERROR when the api fails", () => {
  const resp = { data: { villager: {}, tweets: [], next_results: "results" } };
  axios.get.mockRejectedValue(resp);
  const action = loadVillagerDetails("Flora");

  return action(dispatch).then(() => {
    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(LOAD_VILLAGER_DETAILS);
    expect(dispatch.mock.calls[1][0].type).toBe(LOAD_VILLAGER_DETAILS_ERROR);
  });
});

test("should load more tweets", () => {
  const resp = { data: { tweets: [], next_results: "results" } };
  axios.get.mockResolvedValue(resp);
  const action = loadMoreTweets("flora", "url");

  return action(dispatch).then(() => {
    const dMockCallInitial = dispatch.mock.calls[0][0];
    const dMockCallSuccess = dispatch.mock.calls[1][0];

    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dMockCallInitial.type).toBe(LOAD_MORE_TWEETS);
    expect(dMockCallSuccess.type).toBe(LOAD_MORE_TWEETS_SUCCESS);
    expect(dMockCallSuccess.tweets).toBe(resp.data.tweets);
    expect(dMockCallSuccess.moreTweetsURL).toBe(resp.data.next_results);
  });
});

test("should dispatch LOAD_MORE_TWEETS_ERROR when the api fails", () => {
  const resp = { data: { tweets: [], next_results: "results" } };
  axios.get.mockRejectedValue(resp);
  const action = loadMoreTweets("flora", "url");

  return action(dispatch).then(() => {
    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(LOAD_MORE_TWEETS);
    expect(dispatch.mock.calls[1][0].type).toBe(LOAD_MORE_TWEETS_ERROR);
  });
});

test("should load Filtered Villagers", () => {
  const resp = { data: [] };
  axios.get.mockResolvedValue(resp);
  const action = loadFilteredVillagers("species", "rabbit");

  return action(dispatch).then(() => {
    const dMockCallInitial = dispatch.mock.calls[0][0];
    const dMockCallSuccess = dispatch.mock.calls[1][0];

    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dMockCallInitial.type).toBe(LOAD_FILTERED_VILLAGERS);
    expect(dMockCallSuccess.type).toBe(LOAD_FILTERED_VILLAGERS_SUCCESS);
    expect(dMockCallSuccess.filteredVillagers).toBe(resp.data);
  });
});

test("should dispatch LOAD_FILTERED_VILLAGERS_ERROR when the api fails", () => {
  const resp = { data: [] };
  axios.get.mockRejectedValue(resp);
  const action = loadFilteredVillagers("species", "rabbit");

  return action(dispatch).then(() => {
    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(LOAD_FILTERED_VILLAGERS);
    expect(dispatch.mock.calls[1][0].type).toBe(LOAD_FILTERED_VILLAGERS_ERROR);
  });
});

test("should load Birthday Villager", () => {
  const resp = { data: [] };
  axios.get.mockResolvedValue(resp);
  const action = loadBirthdayVillager(15, 1);

  return action(dispatch).then(() => {
    const dMockCallInitial = dispatch.mock.calls[0][0];
    const dMockCallSuccess = dispatch.mock.calls[1][0];

    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dMockCallInitial.type).toBe(LOAD_BIRTHDAY_VILLAGER);
    expect(dMockCallSuccess.type).toBe(LOAD_BIRTHDAY_VILLAGER_SUCCESS);
    expect(dMockCallSuccess.birthdayVillagers).toBe(resp.data);
  });
});

test("should dispatch LOAD_BIRTHDAY_VILLAGER_ERROR when the api fails", () => {
  const resp = { data: [] };
  axios.get.mockRejectedValue(resp);
  const action = loadBirthdayVillager(15, 1);

  return action(dispatch).then(() => {
    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(LOAD_BIRTHDAY_VILLAGER);
    expect(dispatch.mock.calls[1][0].type).toBe(LOAD_BIRTHDAY_VILLAGER_ERROR);
  });
});

test("should load Villagers", () => {
  const resp = { data: [] };
  axios.get.mockResolvedValue(resp);
  const action = loadVillagers();

  return action(dispatch).then(() => {
    const dMockCallInitial = dispatch.mock.calls[0][0];
    const dMockCallSuccess = dispatch.mock.calls[1][0];

    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dMockCallInitial.type).toBe(LOAD_VILLAGERS);
    expect(dMockCallSuccess.type).toBe(LOAD_VILLAGERS_SUCCESS);
    expect(dMockCallSuccess.villagers).toBe(resp.data);
  });
});

test("should dispatch LOAD_VILLAGERS_ERROR when the api fails", () => {
  const resp = { data: [] };
  axios.get.mockRejectedValue(resp);
  const action = loadVillagers();

  return action(dispatch).then(() => {
    expect(axios.get.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe(LOAD_VILLAGERS);
    expect(dispatch.mock.calls[1][0].type).toBe(LOAD_VILLAGERS_ERROR);
  });
});

test("should Search Villagers", () => {
  const action = loadSearchVillagers();

  action(dispatch);
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0].type).toBe(LOAD_SEARCH_VILLAGERS);
});
