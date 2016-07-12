import {QueueList} from "./QueueList";
import {Toolbar} from "./Toolbar";
import * as React from "react";

interface IQ3AppProps {
  data: any;
}
// interface IQ3AppState {}

export class Q3App extends React.Component<IQ3AppProps, {}> {

  public render() {
    console.log("called Q3App render");
    return (
    <div>
      <Toolbar />
      <QueueList data={this.props.data} />
    </div>
    );
  }
};
