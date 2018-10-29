import React, { Component } from "react";
import Search from "../Search/index.jsx";
import Result from "../Result/index.jsx";
import Grid from "@material-ui/core/Grid";
import "./style.css";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceValue: []
    };
  }
  render() {
    return (
      <div>
        <Grid item xs={10} sm={8} className="grid">
          <Search resultValue={this.state.sourceValue} />
          <Result resultValue={this.state.sourceValue} />
        </Grid>
      </div>
    );
  }
}
