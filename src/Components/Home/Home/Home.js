import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
//import FooterCol from '../FooterCol/FooterCol';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <About></About>
            <Services></Services>
           
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;