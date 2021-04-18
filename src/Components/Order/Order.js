import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
    
    const {register, handleSubmit, errors} = useForm();


    // const handlePaymentSuccess = paymentId=>{
    //     data.ordererDate = new Date();
    //     fetch('https://sleepy-sands-83794.herokuapp.com/addClientOrder', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         alert('Thanks for your order', success);
    //     })
    // }


    const onSubmit = data => {
        
        data.ordererDate = new Date();
        fetch('https://sleepy-sands-83794.herokuapp.com/addClientOrder', {
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
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#928e8e'}}>Order</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'64px','color': '#928e8e'}}>{loggedInUser.name}</h6>
                    </span>
          <div className="row">
              <div className="col-md-6">
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
                            

                            <button type="submit" id='submitButton' class="btn btn-dark">Send</button>
                            
                        </form>
                            
                    </div>
              </div>
              <div className="col-md-6">
                  
                  <h5 className='text-center mt-5'>Pay Here</h5> <hr/>
                  <Payment ></Payment>
                  
              </div>
          </div>
                </div>
                
            </div>
        </section>
    );
};

export default Order;