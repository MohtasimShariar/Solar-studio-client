import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import aribnd from '../../images/logos/airbnb.png';
import './CompanyClient.css';

const CompanyClient = () => {
    return (
        <section className="d-flex justify-content-around">
            <img className="img-size" src={slack} alt=""/>
            <img className="img-size" src={google} alt=""/>
            <img className="img-size" src={uber} alt=""/>
            <img className="img-size" src={netflix} alt=""/>
            <img className="img-size" src={aribnd} alt=""/>

        </section>
    );
};

export default CompanyClient;