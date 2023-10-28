import React, { useState } from 'react';

import './usercard.css';

const UserCard = ({image}) => {
  return (
    <div className='usercard'>
            <div className="user-image user-big">
                <img src={image} />
            </div>
            <h2 style={{width: '100%'}}>Artist Name</h2>
            <h3>This is the description of some Artist or Producer</h3>
            <div>
                <div className="user-image icon" style={{float: 'right'}}>
                    <img src={image} />
                </div>
                <div className="user-image icon" style={{float: 'right'}}>
                    <img src={image} />
                </div>
                <div className="user-image icon" style={{float: 'right'}}>
                    <img src={image} />
                </div>
            </div>
    </div>
  );
};

export default UserCard;
