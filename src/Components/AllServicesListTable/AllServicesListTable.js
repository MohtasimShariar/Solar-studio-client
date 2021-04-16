import React from 'react';

const AllServicesListTable = ({allServicesListItem}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
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
                        <td>{
                            <div class="form-group">
                                <select class="btn-outline-danger" id="exampleFormControlSelect1">
                                    <option>Pending</option>
                                    <option>Done</option>
                                </select>
                            </div>   
                        }</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllServicesListTable;