import * as React from "react";

interface IAvatarProps {
  color: string;
}

export class Avatar extends React.Component<IAvatarProps, {}> {
  public render() {
    let blockStyle = { backgroundColor: this.props.color };
    return <div className="avatar-picture" style={ blockStyle }></div>;
  }
}
