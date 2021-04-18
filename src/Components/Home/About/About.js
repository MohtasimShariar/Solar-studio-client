import React from 'react';
import colimg from "../../../images/colimg.jpg"

const About = () => {
    return (
       <section className='mt-5'>
            <h3 className='text-center '>About Us</h3> <hr/> <br /> 
            <div className='row mt-5'> 
            <div className="col-md-4 offset-md-2">
           
            <h2>OUR 10 YEARS WORKINGEXPERIENCE DESIGN.</h2> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque nam numquam harum iste perferendis possimus eligendi ipsum quae voluptate, magnam ab recusandae tempore error alias quod aliquam ad nobis.</p>
            </div>

            <div className="col-md-6">
                <img src={colimg} style={{height:'auto', width:'50%'}} alt=""/>
            </div>

        </div>
       </section>
    );
};

export default About;