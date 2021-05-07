import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";

const App: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <div>
        <h3>React is setup !</h3>
        <HomePage />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
