import React from 'react';
import './CompanyClient.css';


const CompanyClient = () => {
    return (
       
        <section id="counter" class="parallax padding projectdata mt-5 mb-5" >
  <div class="container">
    <h2 class=" text-center pb-5 ">Ours Working<span style={{color: 'blueviolet'}}> Experiences</span></h2>
    <div class="row number-counters">
      <div class=" col-md-3 col-sm-6 col-xs-6 counters-item text-center wow fadeInUp animated Project-Completed" data-wow-delay="300ms">
        <i class="icon-layers"></i>
      
        <h5 style={{color: 'blueviolet'}}>Project Completed</h5>
        <strong style={{color: 'red'}} data-to="1235">1235</strong>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 counters-item text-center wow fadeInUp animated Awards-Won" data-wow-delay="400ms">
        <i class="icon-trophy"></i>
        
        <h5 style={{color: 'blueviolet'}}>Awards Won</h5>
        <strong style={{color: 'red'}} data-to="78">78</strong>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 counters-item text-center wow fadeInUp animated Hours-Work" data-wow-delay="500ms">
        <i class=" icon-icons20"></i>
        
        <h5 style={{color: 'blueviolet'}}>Hours of Work / Month</h5>
        <strong style={{color: 'red'}} data-to="186">186</strong>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 counters-item text-center wow fadeInUp animated Satisfied-Clients" data-wow-delay="600ms">
        <i class="icon-happy"></i>
       
        <h5 style={{color: 'blueviolet'}}>Satisfied Clients</h5>
        <strong style={{color: 'red'}} data-to="89">89</strong>
      </div>
    </div>
  </div>
</section>
    );
};

export default CompanyClient;