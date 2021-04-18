import React from 'react';
import './FeedbackClient.css';

const FeedbackClient = ({ client }) => {
    return (
        
        <div class="card border-secondary mb-3 m-2 customStyle" style={{maxWidth: '18rem'}}>
        <div class="card-header"> <h5>{client.name}</h5></div>
        <div class="card-body text-secondary">
            <h5 class="card-title"><h6>{client.companyName}</h6></h5>
            <p>{client.description}</p>
        </div>
    </div>
    );
};

export default FeedbackClient;