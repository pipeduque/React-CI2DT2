import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register'

import logoCI2DT2 from '../CI2DT2.png';

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

            </div>
          </div>
        </div>

      </nav>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src={logoCI2DT2} style={{ width: 594, height: 441 }} />
          </div>
          <div className='col s5'>
            <div className='card'>
              <div className='card-content'>
                <div className='row'>
                  <Login />
                </div>

                <div className='row'>
                  <Link to="/Register">
                    <div className='row center'>
                      <button type="submit" className='btn light-green darken-4'>
                        Crear Cuenta
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path='*' />
      </Routes>


    </>
  );
};

export default App;