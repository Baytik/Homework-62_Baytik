import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="our-contacts">
                <p>Phone number: +1234567890</p>
            </div>
            <div className="info">
                <p>Our<span>Contact:</span></p>
                <div className="txt-1">Country: Kyrgyzstan</div>
                <div className="txt-1">Region: Chyi</div>
                <div className="txt-1">Street: Something</div>
                <div className="txt-1">Phone: +1234567890</div>
            </div>
        </div>
    );
};

export default Contacts;