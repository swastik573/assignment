
import React, { useState, useEffect } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginfailure, loginrequest, loginsuccess } from '../../reducers/user';


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginrequest());
      console.log("first");
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          expiresInMins: 30, 
        })
      })
      const data  = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      dispatch(loginsuccess(data));
    } catch (err) {
      console.error(err);
      console.log("2nd");
      dispatch(loginfailure(err));
    }
  };

  const { error } = useSelector(state => state.user);

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/82/0a/9d/820a9df8b0ecfe2737c84f0af47a0220.jpg" alt="" />
      </div>
      <div className="text-center mt-4 name">
        F.R.I.E.N.D.S
      </div>
      <form className="p-3 mt-3" onSubmit={submitHandler}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="text" name="userName" value={username} id="userName" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" value={password} id="pwd" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
      
    </div>
  );
};
