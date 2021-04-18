import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = admin => {
        admin.createDate = new Date();
        fetch('https://sleepy-sands-83794.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(success => {
            alert("Done", success);
        })
    }

    return (
        <section className="makeAdmin-content container-fluid ">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#928e8e'}}>Make Admin</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'64px','color': '#928e8e'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="order-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h6>Admin's email address</h6>
                            <div className="d-flex">
                                <input type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" className="form-control form-element" placeholder="Email address"/>
                                <button type="submit" style={{'margin-left':'20px'}} class="btn btn-success">Submit</button> 
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default MakeAdmin;