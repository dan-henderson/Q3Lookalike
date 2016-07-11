import {QueueList} from "./QueueList";
import {Toolbar} from "./Toolbar";
import * as React from "react";

interface IQ3AppProps {

}
// interface IQ3AppState {}

export class Q3App extends React.Component<IQ3AppProps, {}> {

  public render() {
    return (
    <div>
      <Toolbar />
      <QueueList />
    </div>
    );
  }
};
