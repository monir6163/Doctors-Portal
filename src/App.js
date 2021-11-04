import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
