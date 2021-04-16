import React from 'react';
import './ServiceOrderList.css';

const ServiceOrderList = ({orderItem}) => {
    return (
        <div className="col-md-5 serviceOrderList-content">
            <span className="logo-area d-flex">
                <img className="img-fluid mb-3" src={orderItem.img} alt=""/>
                <div class="form-group">
                    <select class="status-btn btn-outline-danger" id="exampleFormControlSelect1">
                        <option>Pending</option>
                        <option>Done</option>
                    </select>
                </div>
            </span>
            <h5>Service Name: {orderItem.service}</h5>
            <p>Order details: {orderItem.description}</p>
            <p>Cost: {orderItem.price} $</p>     
        </div>
    );
};

export default ServiceOrderList;