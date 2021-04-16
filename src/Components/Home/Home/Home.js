import React from 'react';
import CarouselBody from '../CarouselBody/CarouselBody';
import CompanyClient from '../CompanyClient/CompanyClient';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <CompanyClient></CompanyClient>
            <Services></Services>
            <CarouselBody></CarouselBody>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;