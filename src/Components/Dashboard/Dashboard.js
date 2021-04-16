import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <section className="dashboard-content container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10 container-fluid">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#DC3545'}}>Dashboard</h3>
                    </span>
                    
                    <div className="row customer-order-list">
                        <h3 style={{'margin-left':'30%', 'margin-top':'64px','color': '#DC3545'}}>Welcome... <br/> {loggedInUser.name}</h3>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;