import React, { useState } from 'react';
import VideoGrid from './Dashboard';

import './profile.css';

const Profile = () => {

  const image = 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 5fr' }}>
        <div style={{ margin: '20px' }}>
            <div style={{width:"300px"}}>
                <div className="user-image user-bigger">
                    <center><img src={image} /></center>
                </div>
                <br/>
                <center><h2>#32 Artist Name</h2></center>
                <center><h3>username and 71 others Voting</h3></center>
                <center><a href="#">ly.bit/abcdef</a> <span className='edit'>🖊️</span></center>
                <center><h3>This is the description given by the artist or producers  <span className='edit'>🖊️</span></h3></center>
            </div>
        </div>
        <div>
            <VideoGrid addVideo />
        </div>
    </div>
  );
};

export default Profile;
