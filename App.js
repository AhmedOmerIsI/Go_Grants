import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import LoginForm from './LoginForm';
import GrantApplicationForm from './GrantApplicationForm';
import "./styles.css";
import {signOut} from 'firebase/auth';
import {auth} from "./firebase";


const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  return (
    <Router>
      <nav>
        <Link to ="/">Home</Link>
        {!isAuth ? (
        <Link to ="/login">Login</Link>
        ) : ( 
          <>
          <Link to ="/grantapplication">Apply For a Grant</Link>
          <button onClick = {signUserOut}>Log Out</button>
           </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage isAuth={isAuth} />} />
        <Route path="/login" element={<LoginForm setIsAuth={setIsAuth} />} />
        <Route path="/grantapplication" element={<GrantApplicationForm isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
};


export default App;