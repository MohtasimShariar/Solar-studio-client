import React from 'react';
import carouselOne from '../../images/carousel-1.png';
import carouselTwo from '../../images/carousel-2.png';
import carouselThree from '../../images/carousel-3.png';
import carouselFour from '../../images/carousel-4.png';
import carouselFive from '../../images/carousel-5.png';

import './CarouselMain.css';

const CarouselMain = () => {
    return (
        <div style={{'padding': '10px 0px'}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carouselOne} class="d-block w-100 slide-height" alt="..."/>    
                    </div>

                    <div class="carousel-item">
                    <img src={carouselTwo} class="d-block w-100 slide-height" alt="..."/>
                    </div>

                    <div class="carousel-item">
                    <img src={carouselThree} class="d-block w-100 slide-height" alt="..."/>
                    </div>

                    <div class="carousel-item">
                    <img src={carouselFour} class="d-block w-100 slide-height" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src={carouselFive} class="d-block w-100 slide-height" alt="..."/>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
};

export default CarouselMain;