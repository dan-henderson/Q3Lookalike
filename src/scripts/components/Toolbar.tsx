import * as React from "react";

// interface IToolbarProps {}
// interface IToolbarState {}

export class Toolbar extends React.Component<{}, {}> {
  constructor() {
    super();
  }

  public render() {
    return (
      <div>
        <div>
        Q^3
        </div>
        <button onClick={ e => this.newQueue(e) }> New queue </button>
      </div>
    );
  }

  private newQueue(e: React.MouseEvent) {
    console.log("new queue clicked");
  }
}
