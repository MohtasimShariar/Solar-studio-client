import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import './Navigation.css';
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
        <section>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img id="main-logo" src={logo} alt=""/>
                </Link>
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto navigation-item">
                        <li className="nav-item">
                            
                            <h5 className="nav-link" to="/home">{loggedInUser.name}</h5>

                        </li>
                    
                        <li class="nav-item active">
                            <Link className="nav-link" to="/home">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/dashboard/${loggedInUser.name}`}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">
                                <button type="button" className="btn btn-dark login-btn">Login</button>
                            </Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </section>
    );
};

export default Navigation;