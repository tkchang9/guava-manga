// @flow

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import preload from "../kitsu_trending.json";

import Browse from "./components/Page/Browse";
import Details from "./components/Page/Details";

const Missing = () => <h1>404</h1>; // eslint-disable-line react/jsx-filename-extension

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Browse} />
      <Route
        path="/details/:id"
        component={(props: { match: { params: { id: string } } }) => {
          const selectedManga = preload.data.find(data => props.match.params.id === data.id);
          if (selectedManga === undefined) {
            return <Missing />;
          }
          return <Details manga={selectedManga} />;
        }}
      />
      <Route component={Missing} />
    </Switch>
  </BrowserRouter>
);

const app = document.getElementById("app");
if (app == null) {
  throw new Error("no app element");
}
ReactDOM.render(<App />, app);

console.log("JS started."); // eslint-disable-line no-console
