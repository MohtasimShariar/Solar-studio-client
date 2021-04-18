import React from 'react';
import about from "../../../images/about.jpg"

const About = () => {
    return (
       <section className='mt-5'>
            <h1 className='text-center'>All About <span style={{color: 'blueviolet'}}>Us</span></h1> <hr/> <br /> 
            <div className='row mt-5'> 
            <div className="col-md-4 offset-md-2">
           
            <h2>We are new So <span style={{color: 'blueviolet'}}> We are Upgraded</span></h2> <br />
            <p>We’re confident you’ll love how easy it is to
start text message advertising with SimpleTexting.
That’s why we let you try it free for two weeks.
No credit card required.</p>
            </div>

            <div className="col-md-6">
                <img src={about} style={{height:'auto', width:'50%'}} alt=""/>
            </div>

        </div>
       </section>
    );
};

export default About;