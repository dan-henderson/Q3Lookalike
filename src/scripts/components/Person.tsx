import { ColorBlock } from "./ColorBlock";
import randomColor = require("randomcolor");
import * as React from "react";

export class Person extends React.Component<{}, {}> {

  public render() {
    return(
      <div>
      Here is a person in that queue.
      </div>
    );
  }
};
