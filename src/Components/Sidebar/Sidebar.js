import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHdd, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Sidebar.css';
import { useEffect } from 'react';
import { UserContext } from '../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://sleepy-sands-83794.herokuapp.com/getAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())

        .then(data => {
            setIsAdmin(data);
            console.log(data);
        });
    }, [])

    console.log(isAdmin);
    
    return (
        <div className="sidebar-content ">
            <div className="logo-container text-center ">
                <Link to="/home"><img  src={logo} alt="" width = '100' height= '100' /></Link>
            </div>
            <div className="menu-item mb-10 pb-5 ">
                <Link to='/dashboard'>
                    <h5> <span className="icon-style"><FontAwesomeIcon icon={faBars}/></span>
                    <span className="dashboard">Dashboard</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/order'>
                    <h5> <span className="icon-style"><FontAwesomeIcon icon={faCartPlus}/></span>
                    <span className="dashboard">Order</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/serviceList'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faHdd}/></span>
                    <span className="dashboard">Service list</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/review'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faCommentAlt} /></span>
                    <span className="dashboard">Review</span></h5>
                </Link>
            </div>
             
            { isAdmin &&
                <div className="mb-10 pb-5 ">
                    <div className="menu-item">
                        <Link to='/allServicesList'>
                            <h5><span className="icon-style"><FontAwesomeIcon icon={faHdd}/></span>
                            <span className="dashboard">All Service list</span></h5>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to='/addService'>
                            <h5><span className="icon-style"><FontAwesomeIcon icon={faPlus} /></span>
                            <span className="dashboard">Add Service</span></h5>
                        </Link>
                    </div>
                    <div className="menu-item ">
                        <Link to='/makeAdmin'>
                            <h5><span className="icon-style"><FontAwesomeIcon icon={faUserPlus} /></span>
                            <span className="dashboard">Make Admin</span> </h5>                
                        </Link>
                    </div>
                </div>
            }
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </div>
    );
};

export default Sidebar;