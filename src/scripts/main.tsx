/// <reference path="./main.d.ts" />

import { ColorsApp } from "./components/ColorsApp";
import {Q3App} from "./components/Q3App";
import * as React from "react";
import * as ReactDOM from "react-dom";

var TEST_DATA = [
  {name: "Lunch @ 12:30", picture: "picture goes here",
  members: { 1: {name: "Dan", picture: "photo goes here"},
    2: {name: "some guy", picture: "with another photo"}
  }
},
{name: "Voleyball", picture: "picture goes here",
  members: { 1: {name: "Dan", picture: "photo goes here"},
    2: {name: "some guy", picture: "with another photo"}
  }
}
];

//ReactDOM.render(<ColorsApp />, document.getElementById("content"));
ReactDOM.render(<Q3App />, document.getElementById("content"));
