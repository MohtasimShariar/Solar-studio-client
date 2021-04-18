import React from 'react';
import './Contact.css';
import designer from '../../../images/designer.jpg'
const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
             
                <div style={{'margin-top': '90px'}} className="col-md-5 offset-md-1">
                <img src={designer} style={{height:'auto', width:'50%'}} alt=""/>
                    <h3>Let us handle your <br/> design, professionally.</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias inventore beatae culpa pariatur commodi perferendis suscipit odit id soluta?</p>
                </div>
                <div className="col-md-6">
                    <form action="" className="contact-form">
                        <input className="form-item" type="email" name="" placeholder="Your email address" id=""/>
                        <br/>
                        <br/>
                        <input className="form-item" type="text" name="" placeholder="Tour name/company's name" id=""/>
                        <br/>
                        <br/>
                        <textarea className="form-item" name="message" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        <br/>
                        <br/>
                        <button type="button" className="btn btn-dark send-btn">Send</button>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;