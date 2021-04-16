import React from 'react';
import Contact from '../Contact/Contact';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-content">
            <div>
                <Contact></Contact>
            </div>
            <div className="copyRight text-center">
                <p>Copyright Orange labs {(new Date()).getFullYear()}</p>
            </div>
            
        </section>
    );
};

export default Footer;