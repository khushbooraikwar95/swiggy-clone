/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  console.log(header);

  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);

  // Check if logo is loaded
  expect(logo[0].src).toBe(
    "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w240-h480-rw"
  );
});

test("Online Status should begreen on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  console.log(header);

  const onlineStatus = header.getByTestId("online-status");

  // Check if logo is loaded
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items on rendering the screen", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  console.log(header);

  const cart = header.getByTestId("cart");

  // Check if logo is loaded
  expect(cart.innerHTML).toBe("Cart - 0 items");
});
