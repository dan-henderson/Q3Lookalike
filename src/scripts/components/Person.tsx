import { ColorBlock } from "./ColorBlock";
import randomColor = require("randomcolor");
import * as React from "react";

interface IPersonProps {
  name: string;
}

export class Person extends React.Component<IPersonProps, {}> {

  public render() {
    console.log("called Person render");
    return(
      <div>
      {this.props.name}
      </div>
    );
  }
};
