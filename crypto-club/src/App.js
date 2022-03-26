import './App.css';
import {BrowserRouter} from "react-router-dom"
import Header from "./Components/Header"
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from "@material-ui/core"
import Alert from './Components/Alert';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight:"100vh",
     }
  }));

  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/"component={Homepage} exact/>
        <Route path="/coins/:id"component={CoinPage}/>
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
