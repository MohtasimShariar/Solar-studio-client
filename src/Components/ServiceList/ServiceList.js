import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import fakeData from '../fakeData/fakeData';
import ServiceOrderList from '../ServiceOrderList/ServiceOrderList';
import { UserContext } from '../../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderItem, setOrderItem] = useState([]);
    console.log(orderItem);
    useEffect(() => {
        fetch('http://localhost:5055/getClientOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderItem(data));
    }, [])

    return (
        <section className="serviceList-content container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10 container-fluid">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px', 'color': '#DC3545'}}>Ordered Items</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'64px','color': '#DC3545'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="row customer-order-list">
                        {
                           orderItem.map(orderItem => <ServiceOrderList key={orderItem._id} orderItem={orderItem}></ServiceOrderList>) 
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default ServiceList;