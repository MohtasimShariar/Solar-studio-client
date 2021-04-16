import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [service, setService] = useState([]);

    // Activation of searching
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        fetch('http://localhost:5055/getAddedService')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <section className="container-fluid" style={{'margin-top': '50px', 'backgroundColor': '#CCC'}}>
            <h3 className="text-center pt-5">Provide awesome <span style={{color: '#7AB259'}}>services</span></h3>

            <div className="search-container" style={{'marginBottom': '50px', 'marginTop': '50px'}}>
                <input 
                    type="text" 
                    class="search-box" 
                    placeholder="Search Here....." 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                
            </div>
            <div className="row">
                {
                    service.filter((val) => {
                        if(searchTerm === " "){
                            return val;
                        }
                        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                    .map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            
            
        </section>
    );
};

export default Services;