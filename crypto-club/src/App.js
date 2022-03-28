import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";

const Homepage = React.lazy(() => import("./Pages/Homepage"));
const CoinPage = React.lazy(() => import("./Pages/CoinPage"));

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading.....</div>}>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} />
        </Suspense>
      <Footer/>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
