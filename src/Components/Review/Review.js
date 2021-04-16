import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = info => {
        info.reviewDate = new Date();
        fetch('http://localhost:5055/addClientReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(success => {
            alert('Thanks for your valuable review', success);
        })
        
    }

    return (
        <section className="review-content container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#DC3545'}}>Your Review</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'64px','color': '#DC3545'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="order-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <input type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="name" className="form-control form-element" placeholder="Your name"/>{errors.name && <span className="text-danger">This field is required</span>}
                                <br/>
                                <input type="text" ref={register({ required: true })} name="companyName" className="form-control form-element" placeholder="Company's name, designation"/>{errors.companyName && <span className="text-danger">This field is required</span>}
                                <br/>
                                <textarea ref={register({ required: true })} name="description" className="form-control form-element" placeholder="Description" rows="3"></textarea>{errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-dark">Submit</button> 
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Review;