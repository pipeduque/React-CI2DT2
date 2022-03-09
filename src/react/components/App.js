import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Home from './Home';


function App() {

  return (
    <>
      {/* Navigation */}
      <nav className="light-green darken-3">

        <div className='container'>
          <div className='row'>
            <div className='col s10'>

              <Link to="/"><a className='brand-logo'>CI2DT2</a></Link>
            </div>
            <div className='col s19'>
              <Link to="/register"><a>Register</a></Link>

            </div>
            <div className='col s19'>

              <Link to="/login"><a>Login</a></Link>

            </div>
          </div>
        </div>
      </nav>

      

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home/>} />
      </Routes>


    </>
  );
};

export default App;