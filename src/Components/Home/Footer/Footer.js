import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-content">
             <div className='mt-5 p-5'>
            <div className="row">
                <div className="col-md-3">
                    <h6>Address</h6>
                    <p>H#000 (0th Floor), Road #00,
        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </p>
                </div>
                <div className="col-md-3">
                    <h6>Company</h6> <br/>
                    <ul>
                        <li>About</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms and conditions</li>
                        <li>Submit listing</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h6>Quick Links</h6> <br/>
                    <ul>
                        <li>Quick links</li>
                        <li>Rentals</li>
                        <li>Salse</li>
                        <li>Contact</li>
                        <li>Our blog</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h6>About Us</h6> <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo! Magnam quaerat quia ducimus! Deserunt aspernatur amet dicta ducimus saepe?</p>
                </div>
            </div>
           <p className="copyRight text-center mt-5">Copyright Bongo Services {(new Date()).getFullYear()}</p>
        </div>
   
           
            
        </section>
  
  );
};

export default Footer;