/// <reference path="./main.d.ts" />

import { ColorsApp } from "./components/ColorsApp";
import {Q3App} from "./components/Q3App";
import * as React from "react";
import * as ReactDOM from "react-dom";

var TEST_DATA = [
  {name: "Lunch @ 12:30", picture: "picture goes here",
  members: [
    {name: "Dan", photo: "photo goes here"},
    {name: "some guy", photo: "with another photo"}
  ]
},
{name: "Voleyball", picture: "picture goes here",
  members: [
    {name: "Dan", photo: "photo goes here"},
    {name: "some guy", photo: "with another photo"}
  ]
}
];

//ReactDOM.render(<ColorsApp />, document.getElementById("content"));
ReactDOM.render(
  <Q3App data={TEST_DATA} />,
  document.getElementById("content")
);
