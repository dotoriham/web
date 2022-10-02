import getInitialUserState from "lib/utils/getInitialUserState";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "stores";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";
import { TRACKING_ID } from "lib/constants";

ReactGA.initialize(TRACKING_ID);

getInitialUserState();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
