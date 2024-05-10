
import React from 'react';
import './postcard.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostCard = () => {
  const {loading , users} = useSelector(state => state.user);
  return ( <div >
  {(users&& users.length>0)?users.map((user) => (
        <div className="post-card">
        <img src={user.image} alt="Profile" className="profile-image" />
        <h3 className="post-user">{user.firstName} {user.lastName}</h3>
        <div className="post-body">
          <p className="post-title">{user.title}</p>
          <p className="post-content">Hi everyone my name is {user.firstName} {user.lastName} and I am {user.age} years old. I am a {user.gender}.</p>
        </div>
      </div>
      )):"no posts yet"
    }
  </div>
    
  );
};

export default PostCard;
