import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import ServiceList from './Components/ServiceList/ServiceList';
import Review from './Components/Review/Review';
import AllServicesList from './Components/AllServicesList/AllServicesList';
import AddService from './Components/AddService/AddService';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order/:name">
            <Order></Order>
          </PrivateRoute>
          <Route path="/order">
            <Order></Order>
          </Route>
          <PrivateRoute path="/dashboard/:name">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/allServicesList">
            <AllServicesList></AllServicesList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
