import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import { inject, observer } from "mobx-react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

@inject("store")
@observer
export default class Result extends Component {
  render() {
    return (
      <div>
        <Paper className="paper-result" elevation={1}>
          {this.props.store.latestValue === "" ? (
            <div>
              <h2>Search, Please!</h2>
              <h3>Made by @ko_ma(한끝)</h3>
              <h4>통신사 선택 및 직접 입력 가능! (181011 업데이트)</h4>
            </div>
          ) : (
            <div>
              <Typography variant="headline" component="h2">
                Latest version
              </Typography>
              <Typography component="p" className="value">
                {this.props.store.latestValue}
              </Typography>
              <br />
              <Divider />
              <br />
              <Typography variant="headline" component="h2">
                Older versions
              </Typography>

              {this.props.store.olderValue.map((val, index) => {
                return (
                  <Typography component="p" key={index} className="value">
                    {`${index + 1}. `}
                    {val}
                  </Typography>
                );
              })}
            </div>
          )}
        </Paper>
      </div>
    );
  }
}
