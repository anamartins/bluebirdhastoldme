import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render as rtlRender, screen, fireEvent } from "@testing-library/react";
import reducer, { defaultState } from "../../reducers/reducer";
import Search from "./search";
import loadSearchVillagers from "../../actions/actions";

function render(
  ui,
  {
    initialState = defaultState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test("When the user types the event needs to be dispatch", () => {
  const component = render(<Search />);
  console.log(component.container);

  expect(component).toBeTruthy();
});
