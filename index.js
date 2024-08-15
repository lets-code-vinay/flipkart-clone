import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import BasicLoader from "./src/components/Loader";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={<BasicLoader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
