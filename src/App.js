import logo from './logo.svg';
import './App.css';
import New from './New';
import Outfordelivery from "./Outfordelivery";
import Completed from "./Completed";
import Rejected from "./Rejected";
import {Route, Switch} from "react-router-dom";
import Menuu from "./Menuu";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Menuu />
    <Switch>
      <Route exact path="/" component={New} />
      <Route exact path="/outfordelivery" component={Outfordelivery} />
      <Route exact path="/completed" component={Completed} />
      <Route exact path="/rejected" component={Rejected} />

    </Switch>
    </Router>
      {/* <Completed />
      <Rejected /> */}
    </>
   
  );
}

export default App;
