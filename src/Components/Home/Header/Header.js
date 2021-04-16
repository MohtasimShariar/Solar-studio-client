import React from 'react';
import frame from '../../images/logos/Frame.png';
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
                        <h2>Let's Grow Your <br/> Brand To The <br/> Next Level</h2>
                        <p>It's a creative brand communication agency <br/> with a mission for creative innovation and excellence, <br/> dedicated to helping business houses to enhance its <br/>enterprise value by building their brands. </p>
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