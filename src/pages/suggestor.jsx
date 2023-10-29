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
    <div style={{display: 'flex'}}>
    <div>
        <iframe
                    width="200"
                    height="200"
                    src={"https://www.youtube.com/embed/9Ruc5MDaqRc".replace("watch?v=", "embed/")}
                    frameBorder="0"
                    allowFullScreen
                />
          <div>
                #Y2K #TEEN #SPORTY #HioHop
                </div>
                <div
                      className='user-profile-navigator'
                                    onClick={() => {window.location = 'http://localhost:3000/profile/' + "47n992xedgy3wqaw8m6mave89k5nm6r"}}
                                >
                                    <div className="user-image">
                                        <img src={"https://aware-grouse-298.convex.site/getImage?storageId=3b3d1a9a-693f-461f-a311-0090e1f348ae"} />
                                    </div>
                                    <h2 style={{width: '200%', position: 'relative', top: '15px'}}>John Grants</h2>
                                </div>
    </div>
    <div  style={{ position: 'relative', left: '-100px'}}>
        <iframe
                    width="200"
                    height="200"
                    src={"https://www.youtube.com/embed/nIGzhUvncYE".replace("watch?v=", "embed/")}
                    frameBorder="0"
                    allowFullScreen
                />
          <div>
                #Y2K #SCHOOL #INDIE #HioHop
                </div>
                <div
                      className='user-profile-navigator'
                                    onClick={() => {window.location = 'http://localhost:3000/profile/' + "455a3h0fxnqqgbmztqzsncvk9k5jpe8"}}
                                >
                                    <div className="user-image">
                                        <img src={"https://aware-grouse-298.convex.site/getImage?storageId=a4fa5e10-5230-45e7-830b-d42be1c4767c"} />
                                    </div>
                                    <h2 style={{width: '200%', position: 'relative', top: '15px'}}>Kelvin Lee</h2>
                                </div>
    </div>
    <div style={{ position: 'relative', left: '-200px'}}>
        <iframe
                    width="200"
                    height="200"
                    src={"https://www.youtube.com/embed/chGKMJWO7mo"}
                    frameBorder="0"
                    allowFullScreen
                />
          <div>
                #Y2K #TEEN #SPORTY #RNB
                </div>
                <div
                      className='user-profile-navigator'
                                    onClick={() => {window.location = 'http://localhost:3000/profile/' + "470x2thmmksy39568kksty9f9k5snyg"}}
                                >
                                    <div className="user-image">
                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xawDQUxPIFMDwtX-6SPwN7aIHC9HHlDz8w&usqp=CAU"} />
                                    </div>
                                    <h2 style={{width: '200%', position: 'relative', top: '15px'}}>Jay Park</h2>
                                </div>
    </div>
  </div>
  );
};

export default Suggestor;
