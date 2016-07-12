import {Queue} from "./Queue";
import * as React from "react";

interface IQueueListProps {
  data: any;
}

export class QueueList extends React.Component<IQueueListProps, {}> {

  public render() {
    console.log("called QueueList render");
    let queueNodes = this.props.data.map(function(queue: any) {
      return (
        <Queue name={queue.name} members={queue.members}>
        </Queue>
      );
    });
    return (
      <div>
        {queueNodes}
      </div>
    );
  }
}
