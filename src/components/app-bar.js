import React, { useState, useCallback } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import "./app-bar.scss";

function ApplicationBar() {
  const [menu, setMenu] = useState(false);
  const onOpen = useCallback(function () {
    setMenu(true);
  }, []);
  const onClose = useCallback(function () {
    setMenu(false);
  }, []);

  return (
    <>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit" className="login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menu} onClose={onClose}>
        <List className="menu-list">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default ApplicationBar;
