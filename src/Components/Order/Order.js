import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
    
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        data.ordererDate = new Date();
        fetch('http://localhost:5055/addClientOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            alert('Thanks for your order', success);
        })
    }
    
    return (
        <section className="order-content container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                
                <div  className="col-md-10 order-board">
                    <span className="d-flex order-tagLine">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#DC3545'}}>Order</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'64px','color': '#DC3545'}}>{loggedInUser.name}</h6>
                    </span>
                    <div className="order-form">
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <input type="text" defaultValue={loggedInUser.name} name="name" className="form-control form-element" ref={register({ required: true })} placeholder="Your name/ Company's name"/>{errors.name && <span className="text-danger">This field is required</span>}
                                <br/>
                                <input type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" className="form-control form-element" placeholder="Your email address"/>{errors.email && <span className="text-danger">This field is required</span>}
                                <br/>
                                <input type="text" ref={register({ required: true })} name="service" className="form-control form-element" defaultValue={name} placeholder="Service name"/>{errors.service && <span className="text-danger">This field is required</span>}
                                <br/>
                                <textarea ref={register({ required: true })} name="description" className="form-control form-element" placeholder="Project Details" rows="3"></textarea>{errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="d-flex">
                                <div className="">
                                    <input type="text" ref={register({ required: true })} name="price" className="form-element form-control" placeholder="Price $"/>{errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="">
                                    <input type="file" class="form-control-file upload-file"></input>
                                    
                                </div>   
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-dark">Send</button>
                            
                        </form>
                            
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Order;