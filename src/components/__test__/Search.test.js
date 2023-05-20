/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const shimmer = body.getByTestId("shimmer");
  // eslint-disable-next-line testing-library/no-node-access
  expect(shimmer.children.length).toBe(15);
});

test("Restaurant should load on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // eslint-disable-next-line no-restricted-globals, testing-library/prefer-screen-queries
  await waitFor(() => expect(body.getByTestId("search-btn")));

  //   console.log(body);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const reslist = body.getByTestId("res-list");
  // eslint-disable-next-line testing-library/no-node-access
  expect(reslist.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  // eslint-disable-next-line testing-library/no-node-access
  expect(resList.children.length).toBe(4);
});
