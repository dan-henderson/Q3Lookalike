import { ColorBlock } from "./ColorBlock";
import randomColor = require("randomcolor");
import * as React from "react";

interface IPersonProps {
  name: string;
  photo: any;
}

export class Person extends React.Component<IPersonProps, {}> {

  public render() {
    console.log("called Person render");
    return(
      <div>
      Here is a person in the queue:
      <div>
      {this.props.name}
      {this.props.photo}
      </div>
      </div>
    );
  }
};
