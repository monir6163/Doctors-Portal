import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/DashBoard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
