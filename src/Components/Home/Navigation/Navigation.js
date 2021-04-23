import React, { useContext } from 'react';

import logo from '../../../images/logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserContext } from '../../../App';

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section className='container'>
      <nav class="navbar navbar-expand-lg navbar-dark  bg-transparent">
        <div class="container-fluid">

          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="75" height="75" />
          </Link>
          

          <Link class="navbar-brand" href="#">Solar Studio</Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link text-light" to="/home">Home<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-light" to={`/dashboard/${loggedInUser.name}`}>Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-light" to="/home">Our Team</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-light" to="/home">Our Portfolio</Link>
              </li>
              <li class="nav-item">

                {
                  loggedInUser.name ? <Link className="btn btn-dark login-btn" style={{color:'white'}} to='/login'>{loggedInUser.name}</Link> : <Link to="/login"><Link to="/login">
                  <button type="button" className="btn btn-dark login-btn">Login</button>
                </Link></Link>
                }



              </li>
            </ul>


          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;