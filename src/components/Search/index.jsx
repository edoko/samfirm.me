import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { observer, inject } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./style.css";

@inject("store")
@observer
export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: "",
      carier: "SKC",
      version: "stable",
      carier_: ""
    };
  }

  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({
      state
    });
  };

  getData = () => {
    if (this.state.carier === "") {
      this.props.store.getInfo(
        this.state.model,
        this.state.carier_,
        this.state.version
      );
    } else {
      this.props.store.getInfo(
        this.state.model,
        this.state.carier,
        this.state.version
      );
    }
  };

  render() {
    return (
      <div>
        <Paper className="paper" elevation={1}>
          <TextField
            label="Device Model"
            name="model"
            className="search-field"
            value={this.state.model}
            onChange={this.handleChange}
            margin="normal"
          />
          <FormControl className="form-control">
            <InputLabel shrink htmlFor="carrier-placeholder">
              Carrier
            </InputLabel>
            <Select
              value={this.state.carier}
              onChange={this.handleChange}
              displayEmpty
              name="carier"
            >
              <MenuItem value="SKC">SKT</MenuItem>
              <MenuItem value="KTC">KT</MenuItem>
              <MenuItem value="LUC">LG U+</MenuItem>
              <MenuItem value="KOO">자급제</MenuItem>
              <MenuItem value="">직접 입력</MenuItem>
            </Select>
          </FormControl>
          {this.state.carier === "" ? (
            <TextField
              label="Carrier"
              name="carier_"
              className="search-field"
              value={this.state.carier_}
              onChange={this.handleChange}
              margin="normal"
              style={{ marginLeft: 20 }}
            />
          ) : null}
          <FormControl className="form-control">
            <InputLabel shrink htmlFor="version-placeholder">
              Version
            </InputLabel>
            <Select
              value={this.state.version}
              onChange={this.handleChange}
              displayEmpty
              name="version"
            >
              <MenuItem value="stable">Stable</MenuItem>
              <MenuItem value="test">Test</MenuItem>
            </Select>
          </FormControl>
          <div className="div-btn">
            <Button
              variant="contained"
              color="primary"
              className="serach-btn"
              onClick={this.getData}
            >
              SEARCH
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
