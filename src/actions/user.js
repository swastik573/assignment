import axios from "axios";
import { getCompleteUsersfailure, getCompleteUsersrequest, getCompleteUserssuccess, loaduserfailure, loaduserrequest, loadusersuccess } from "../reducers/user"

export const loaduser = ()=>async (dispatch)=>{
    try {
        dispatch(loaduserrequest());
         const res = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
              'Authorization': localStorage.getItem('token'), 
            }, 
          })
          const data = await res.json();

         dispatch(loadusersuccess(data));
    } catch (error) {
        dispatch(loaduserfailure(error.response));
    }
}






export const getCompleteUsers = ()=>async (dispatch)=>{
    try {
        dispatch(getCompleteUsersrequest());
         
         const res = await fetch('https://dummyjson.com/users', {
            method: 'GET',
            headers: {
              'Authorization': localStorage.getItem('token'), 
            }, 
          })
          const data = await res.json();
         dispatch(getCompleteUserssuccess(data));
    } catch (error) {
        dispatch(getCompleteUsersfailure(error.response));
    }
}