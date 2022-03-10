import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Home from './Home';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>


    </>
  );
};

export default App;
