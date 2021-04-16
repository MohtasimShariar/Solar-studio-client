import React from 'react';
import './Service.css';
import { Link } from "react-router-dom";

import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Service = ({service}) => {
    const {title} = service;
    const [event, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <div className="col-md-3 text-center service-margin" style={{ 'marginBottom': '30px'}}>
            <animated.div
                
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: event.xys.interpolate(trans) }}
            >
                <Link className="nav-link" to={`/order/${title}`}>
                    {
                        service.image ? <img className="img-fluid mb-3 service-img" src={`data:image/png;base64,${service.image.img}`}/>
                        :
                        <img className="img-fluid mb-3 service-img" src={`http://localhost:5055/${service.img}`} alt=""/>
                    }
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                </Link>
            </animated.div>     
        </div>
    );
};

export default Service;