import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { persist } from "mst-persist";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import "./index.css";
import App from "./App";
import { StoreProvider, initStore } from "@/models";

const store = initStore();

const LOCAL_STORAGE_NAME = "store_user";

const queryClient = new QueryClient();

persist(LOCAL_STORAGE_NAME, store, {
  whitelist: ["user"], // only these keys will be persisted
})
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <StoreProvider value={store}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <App />
            </Router>
          </QueryClientProvider>
        </StoreProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch(() => {
    localStorage.removeItem(LOCAL_STORAGE_NAME);
    ReactDOM.render(
      <h1>Al bozdun bozduun! Sayfayı yenile</h1>,
      document.getElementById("root")
    );
  });
