import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "heading" },

  "Heading goes here"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
