import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { EditableTable } from "./tables";
import theme from "./theme";
import AppBar from "./app-bar";
import "./application.scss";

function Application() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container component="div" className="application">
        <Paper elevation={3} className="paper-table">
          <div className="table-container">
            <EditableTable />
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Application;
