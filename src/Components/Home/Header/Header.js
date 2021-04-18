import React from 'react';
import frame from '../../../images/frame.jpg';
import './Header.css';
import {useSpring, animated} from 'react-spring';

const Header = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        transition: 1,
    })

    return (
        <section className='container-fluid header-content'>
            <div className="row">
                <div className="col-md-5 offset-1 text-area">
                    <animated.h1 style={props}>
                    
                        <h2>Let's Make Some<span style={{color: '#76FF03'}}><br/> Awesome Things <br/> Start Your Free Trial Today </span>  </h2><p>We’re confident you’ll love how easy it is to <br/> start text message advertising with SimpleTexting</p>
                        <button type="button" className="btn btn-dark login-btn">Hire us</button>
                        

                    </animated.h1>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid " src={frame} alt=""/>
                </div>     
            </div>   
        </section>
    );
};

export default Header;