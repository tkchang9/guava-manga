import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import preload from "../kitsu_trending.json";
import Browse from "./components/Page/Browse";
import Details from "./components/Page/Details";

const Missing = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Browse} />
      <Route
        path="/details/:id"
        component={props => {
          const selectedManga = preload.data.find(
            data => props.match.params.id === data.id
          );
          if (selectedManga === undefined) {
            return <Missing />;
          } else return <Details manga={selectedManga} />;
        }}
      />
      <Route component={Missing} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));

console.log("JS started.");
