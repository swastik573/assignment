import React, { useEffect } from 'react'
import "./home.css";
import  Postcard  from '../postcard/postcard';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import  {Loader}  from "../loader/loader.jsx"

import { getCompleteUsers } from '../../actions/user.js';

import PostCard from '../postcard/postcard';

export const Home = () => {
  const dispatch = useDispatch();
  
  const {isauthenticated , loading : isloading , users} = useSelector(state => state.user);
  

  useEffect(()=>{
    dispatch(getCompleteUsers());
  },[dispatch]);
  console.log(isauthenticated);

  return (
    <div >
    <PostCard/>
    
    </div>
  )
}
