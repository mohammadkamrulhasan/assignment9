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
import Contact from './components/Contact/Contact';
import Ride from './components/Ride/Ride';
import Blog from './components/Blog/Blog';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        <Transport></Transport>       
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/ride">
            <Ride/>
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/ride/:rideType">
            <Ride></Ride>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
