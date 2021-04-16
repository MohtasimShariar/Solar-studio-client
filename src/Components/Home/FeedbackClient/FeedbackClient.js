import React from 'react';
import './FeedbackClient.css';

const FeedbackClient = ({client}) => {
    return (
        <div className="col-md-3 feedback-client-margin">
            <span className="d-flex client-info">
                <span className="client-name-tag">
                    <h5>{client.name}</h5>
                    <h6>{client.companyName}</h6>
                </span>
            </span>
            <p>{client.description}</p>
        </div>
    );
};

export default FeedbackClient;