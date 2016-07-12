/// <reference path="./main.d.ts" />

import { ColorsApp } from "./components/ColorsApp";
import {Q3App} from "./components/Q3App";
import * as React from "react";
import * as ReactDOM from "react-dom";

var TEST_DATA = [
  {name: "Lunch @ 12:30",
  members: [
    {name: "Dan"},
    {name: "some guy"}
  ]
},
{name: "Voleyball",
  members: [
    {name: "Dan"},
    {name: "some other guy"}
  ]
}
];

//ReactDOM.render(<ColorsApp />, document.getElementById("content"));
ReactDOM.render(
  <Q3App data={TEST_DATA} />,
  document.getElementById("content")
);
