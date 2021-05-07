import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h3>React is setup !</h3>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
