import React from 'react';
import './usercard.css'; 
import { useSelector } from 'react-redux';

const Usercard = () => {
  const {user} = useSelector(state => state.user);
 console.log(user);
  return (
    <div className="card">
      <img src={user.image} alt="Profile" className="profile-pic" />
      <div className="name">
        {user.firstName} {user.lastName}
      </div>
      <div className="username">@{user.username}</div>
    </div>
  );
};

export default Usercard;
