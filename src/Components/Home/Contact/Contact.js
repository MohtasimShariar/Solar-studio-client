import React from 'react';
import './Contact.css';



//no needd


const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{'margin-top': '90px'}} className="col-md-5 offset-md-1">
                    <h3>Let us handle your <br/> project, professionally.</h3>
                    <br/>
                    <p>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
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