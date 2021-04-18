import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const services = [
        {name: "Logo Design" , link: "/logo Design"},
        {name: "Webapp" , link: "/Webapp development"},
        {name: "Website Design" , link: "/Website Design"},
        {name: "Video Editing" , link: "/Video Editing"},
        {name: "Video Making" , link: "/Video Making"},
        {name: "Youtube Banners Design" , link: "/Youtube Banners Design"},
    ]
    const  ourAddress = [
        {name: "Bangladesh Dhaka" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
       
    ]
    const   allservices = [
        {name: "Logo Design" , link: "/logo Design"},
        {name: "Webapp" , link: "/Webapp development"},
        {name: "Website Design" , link: "/Website Design"},
        {name: "Video Editing" , link: "/Video Editing"},
        {name: "Video Making" , link: "/Video Making"},
        {name: "Youtube Banners Design" , link: "/Youtube Banners Design"},
    ]
    const  Contactus = [
        {name: "Solarstudio.com" , link: "/Home"},
        {name: "Call now +8801754194004" , link: "/01754194004"},
       
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Services"} menuItems={services}/>
                    <FooterCol key={2} menuTitle="All Services" menuItems={allservices}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}/>
                    <FooterCol key={4} menuTitle="Contact us " menuItems={Contactus}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                     
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;