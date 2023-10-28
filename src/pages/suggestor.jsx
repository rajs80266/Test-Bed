import React, { useState } from 'react';

import './dashboard.css';
import UserCard from '../components/UserCard';

const Suggestor = (isModalOpen = true, setIsModalOpen) => {

  const images = [
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
  ];

  return (
    <div>
        <div style={{display: 'flex'}}>
        {
            images.map(image => <UserCard image={image} />)
        }
        </div>
    </div>
  );
};

export default Suggestor;
