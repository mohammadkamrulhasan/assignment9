import './App.css';
import Transport from './components/Transport/Transport';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Home from './components/Home/Home';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        {/* <Transport></Transport> */}
        <Home></Home>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book/:bedType">
            
          </PrivateRoute>
          <Route exact path="/">
            
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
