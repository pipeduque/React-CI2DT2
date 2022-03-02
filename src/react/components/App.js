import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {

  return (
    <>
      {/* Navigation */}
      <nav className="light-green darken-3">

        <div className='container'>
          <a className='brand-logo' href='/'>CI2DT2</a>
        </div>
      </nav>

      <Register/>

      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;