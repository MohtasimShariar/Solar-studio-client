import React from 'react';
import CarouselMain from '../CarouselMain/CarouselMain';
import { useSpring, animated } from 'react-spring';


const CarouselBody = () => {

    const props = useSpring({
        from: { right: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
        to: async next => {
          while (1) {
            await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' })
            await next({ height: '100%', background: 'lightgreen' })
            await next({ top: '0%', height: '100%', background: 'lightpink' })
            await next({ top: '100%', height: '100%', background: 'lightsalmon' })
            await next({ top: '100%', height: '100%', background: 'lightskyblue' })
            await next({ width: '100%', background: 'lightslategrey' })
          }
        },
      })

    return (
        <section style={{'background-color': '#111430', 'margin-top': '100px', 'height' : '90vh'}}>
            <animated.div className="script-box" style={props}>
                <h3 style={{'padding-top': '80px'}} className="text-center text-white">Here are some of <span style={{color: '#7AB259'}}>our works</span></h3>
                <div>
                    <CarouselMain></CarouselMain>
                </div>
            </animated.div>
        </section>
    );
};

export default CarouselBody;