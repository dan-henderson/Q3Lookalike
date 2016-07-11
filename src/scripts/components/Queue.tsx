import { ColorBlock } from "./ColorBlock";
import {Person} from "./Person";
import randomColor = require("randomcolor");
import * as React from "react";

export class Queue extends React.Component<{}, {}> {

  public render() {
    return (
      <div>
      This should be a queue.
      <Person />
      </div>
    );
  }

};
