import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: amber[500],
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  formulaire: { padding: "10px 24px", margin: "10px 30px" },
  button: { padding: "6px" },
}));

export default theme;
