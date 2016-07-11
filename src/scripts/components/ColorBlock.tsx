import * as React from "react";

interface IColorBlockProps {
  color: string;
}

export class ColorBlock extends React.Component<IColorBlockProps, {}> {
  public render() {
    let blockStyle = { backgroundColor: this.props.color };
    return <div className="color-block" style={ blockStyle }></div>;
  }
}
