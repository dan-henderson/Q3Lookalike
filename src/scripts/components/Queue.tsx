import { ColorBlock } from "./ColorBlock";
import {Person} from "./Person";
import randomColor = require("randomcolor");
import * as React from "react";

interface IQueueProps {
  name: string;
  members: string[];
}

export class Queue extends React.Component<IQueueProps, {}> {

  public render() {
    console.log("called Queue render");
    let memberNodes = this.props.members.map(function(person: any) {
      return (
        <Person name={person.name}>
        </Person>
      );
    });
    return (
      <div>
        <h2>
          {this.props.name}
        </h2>
        {memberNodes}
      </div>
    );
  }

};
