import React from 'react';

export default function Login() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col '>
                        <div className='card'>
                            <div className='card-content'>
                                <form>
                                    <div className='row'>
                                        <div className='input-field col'>
                                            <input type="text" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field col '>
                                            <input type="text" placeholder='Contraseña' />
                                        </div>
                                    </div>
                                    <div className='row center'>
                                        <button type="submit" className='btn light-green darken-4'>
                                            Iniciar sesión
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}   