import React, { useEffect, useState } from 'react';
import './userranking.css';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const UserRanking = () => {
  const [users, setUsers] = useState([])
  const top_10_users = useQuery(api.votes.getTop10);
  const personnel_details = useQuery(api.personnel_details.get);

  useEffect(() => {
    if(top_10_users && personnel_details) {
      let rank = 0;
      const topUsers = top_10_users.map((user1) => {
        const { uid } = user1;
        const {display_profile, name} = personnel_details.filter((user2) => uid == user2.uid)[0];
        rank += 1;
        return {id: uid, name, rank, display_profile};
      });
      setUsers(topUsers);
    }
  }, [top_10_users, personnel_details]);

  const handleRankClick = (rank) => {
    // Handle click event here
    // Update the user's rank, then setUsers with the updated data
  };

  return (
    <div className="user-ranking">
      <h2>Top 10 Users</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={`rank-user rank-${user.rank}`}
            onClick={() => handleRankClick(user.rank)}
          >
            <span className="user-rank">{user.rank}</span>
            <span className="user-icon">{user.icon}</span>
            <img className="profile-image" src={user.display_profile} alt={user.name} />
            <span className="user-name">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRanking;
