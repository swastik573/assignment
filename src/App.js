import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import { Login} from "./components/login/login.jsx";

import { useDispatch, useSelector } from "react-redux";
import {Header} from "./components/header/header.jsx";
import {Home} from "./components/Home/home.jsx";
import { useEffect } from "react";
import { loaduser } from "./actions/user.js";
import Usercard from "./components/usercard/usercard.jsx";

function App() {
  const dispatch = useDispatch();
  const {isauthenticated,user} = useSelector(state => state.user);
  useEffect(()=>{
    dispatch(loaduser());
  },[dispatch]);
  return (
    <Router>
     {isauthenticated && <Header/>}
    
    <Routes>
      <Route path="/" element={(isauthenticated)?<Home/>:<Login/>} />
       
      <Route path="/search" element={(isauthenticated)?<Home/>:<Login/>} />
      
      <Route path="/myaccount" element={(isauthenticated)?<Usercard />:<Login/>} />
      <Route path="/userprofile" element={(isauthenticated)?<Usercard />:<Login/>} />

    </Routes>
    </Router>
  );
}

export default App;
