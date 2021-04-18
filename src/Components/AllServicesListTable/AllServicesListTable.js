import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllServicesListTable = ({allServicesListItem}) => {

    const[order ,setOrder] = useState([])
    const [id, setId] = useState('');


    useEffect(() => {
        fetch('https://sleepy-sands-83794.herokuapp.com/getAllClientsOrder/')
        .then(res => res.json())
        .then(data => setOrder(data))
        
    },[])

    useEffect(() => {
        id &&
            axios
                .delete(
                    `https://sleepy-sands-83794.herokuapp.com/getAllClientsOrder/${id}`
                )
                .then(() => console.log('delete ss'));
    }, [id]);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    {/* <th className="text-secondary" scope="col">Status</th> */}
                    
                </tr>
            </thead>
            <tbody>
                {
                  allServicesListItem.map((serviceName, index) =>    
                    <tr>
                        <td>{index + 1}</td>
                        <td>{serviceName.name}</td>
                        <td>{serviceName.email}</td>
                        <td>{serviceName.service}</td>
                        <td>{serviceName.description}</td>
                        {/* <td><button className='btn btn-danger' onClick={() =>setId(data._id)}>delete</button></td> */}
                        <td>{
                            // <div class="form-group">
                            //     <select class="btn-outline-danger" id="exampleFormControlSelect1">
                            //         <option>Pending</option>
                            //         <option>Done</option>
                            //     </select>
                            // </div>   
                        }</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllServicesListTable;