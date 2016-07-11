import { ColorBlock } from "./ColorBlock";
import randomColor = require("randomcolor");
import * as React from "react";

interface IColorsAppState {
  colors: string[];
}

export class ColorsApp extends React.Component<{}, IColorsAppState> {
  constructor() {
    super();
    this.state = { colors: [] };
  }

  private get colorBlocks() {
    return this.state.colors.map((color, i) => {
      return <ColorBlock key={ i } color={ color } />;
    });
  }

  public render() {
    return <div>
      <button onClick={ e => this.handleClick(e) }>Add Block</button>
      <div id="color-blocks">
        { this.colorBlocks }
      </div>
    </div>;
  }

  private handleClick(e: React.MouseEvent) {
    this.setState(s => {
      s.colors.push(randomColor());
      return s;
    })
  }
}
