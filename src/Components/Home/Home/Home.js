import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import CompanyClient from '../CompanyClient/CompanyClient';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <CompanyClient></CompanyClient>
            <Feedback></Feedback>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;