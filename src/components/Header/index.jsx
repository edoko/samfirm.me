import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const sideList = (
      <div className="sideList">
        <List>
          <a
            href="http://komalab.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KOMALAB
          </a>
        </List>
        <Divider />
        <Divider />
        <Divider />
        <List>
          <a
            href="http://typinginsta.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @TypingInsta - 인스타 규격에...
          </a>
        </List>
        <Divider />
        <List>
          <a href="http://remde.me/" target="_blank" rel="noopener noreferrer">
            ReMDe - 마크다운 에디터
          </a>
        </List>
        <Divider />
      </div>
    );

    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer("left", true)} />
              <Drawer
                open={this.state.left}
                onClose={this.toggleDrawer("left", false)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer("left", false)}
                  onKeyDown={this.toggleDrawer("left", false)}
                >
                  {sideList}
                </div>
              </Drawer>
            </IconButton>
            <Typography variant="title" color="inherit" className="title-grow">
              Samsung Firmware Searcher
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
