import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  footer: {
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="black" position="static">
        <Container>
          <Toolbar>
            <Typography className={classes.footer} variant="h6">
              Crypto-Club by Sushil Pundkar
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
