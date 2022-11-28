import React from "react";
import ReactDOM from "react-dom/client";
import client from "./Client";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
