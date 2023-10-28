import React from 'react';

import './userranking.css';

const UserRanking = () => {
    const users = [
      { id: 1, name: 'John Doe', rank: 1, icon: '🥇', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 2, name: 'Jane Smith', rank: 2, icon: '🥈', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 3, name: 'Sima Singh', rank: 3, icon: '🥉', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 4, name: 'Sima Singh', rank: 4, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 5, name: 'Sima Singh', rank: 5, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 6, name: 'Sima Singh', rank: 6, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 7, name: 'Sima Singh', rank: 7, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 8, name: 'Sima Singh', rank: 8, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 9, name: 'Sima Singh', rank: 9, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
      { id: 10, name: 'Sima Singh', rank: 10, icon: '', profileImage: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' },
    ];
  
    return (
      <div className="user-ranking">
        <h2>Top 10 Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <span className="user-rank">{user.rank}</span>
              <span className="user-icon">{user.icon}</span>
              <img className="profile-image" src={user.profileImage} alt={user.name} />
              <span className="user-name">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default UserRanking;
