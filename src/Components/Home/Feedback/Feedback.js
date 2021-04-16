import React, { useEffect, useState } from 'react';
import FeedbackClient from '../FeedbackClient/FeedbackClient';

const Feedback = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/getAllClientReview')
        .then(res => res.json())
        .then(data => setClient(data))
    }, [])
    
    return (
        <section className="container-fluid" style={{'margin-top': '50px'}}>
            <h3 className="text-center">Clients <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row">
                {
                    client.map(client => <FeedbackClient client={client}></FeedbackClient>)
                }
            </div>

        </section>
    );
};

export default Feedback;