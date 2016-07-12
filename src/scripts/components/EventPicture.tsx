import * as React from "react";

interface IEventPictureProps {
  color: string;
}

export class EventPicture extends React.Component<IEventPictureProps, {}> {
  public render() {
    let blockStyle = { backgroundColor: this.props.color };
    return <div className="event-picture" style={ blockStyle }></div>;
  }
}
