import React from 'react';
import './Messages.css';

const Messages = () => {
    return (
        <div className="Messages">
            <h5>Your Messages</h5>
            <input type="text" placeholder="You have not messages" disabled="disabled"/>
        </div>
    );
};

export default Messages;