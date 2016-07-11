import * as React from "react";

interface IColorBlockProps {
  color: string;
}

export class ColorBlock extends React.Component<IColorBlockProps, {}> {
  public render() {
    let blockStyle = {
      backgroundColor: this.props.color,
      height: "100px",
      width: "100px"
    };
    return <div style={ blockStyle }></div>;
  }
}
