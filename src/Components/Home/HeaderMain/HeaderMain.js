import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="headerMain-content">
            <Navigation></Navigation>
            <Header></Header>
        </section>
    );
};

export default HeaderMain;