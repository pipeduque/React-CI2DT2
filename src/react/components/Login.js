import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
const { bindId }  = require('../../keys');

const initialState = {
    email: '',
    password: ''
};

function reducer(state, action) {
    switch (action.type) {

        case 'setEmail':
            return {
                ...state,
                email: action.payload
            };

        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
    }
}


export default function Login() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    function invokeBindId() {
        window.XmBindId.authenticate({
            redirectUri: bindId.redirectUri
        }).then(res => {
            onSuccess(res);
            
            M.toast({ html: "Bienvenido de vuelta " + data.firstName + ' ' + data.lastName + '!' });
            navigate('/home');
        }, err => {
            onFailure(err);
        })
    }

    function initializeSDK() {
        window.XmBindId.initialize({
            clientId: bindId.clientId,
            apiCompat: window.XmBindId.XmBindIdApiCompatibilityLevel.UseLatest
        });
    }

    const handleLogin = (e) => {

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                initializeSDK();
                invokeBindId();


            })
            .catch(err => {
                M.toast({ html: err });
                console.log(err);
            });

        e.preventDefault();
    }

    const handleEmail = (e) => {
        dispatch({
            type: 'setEmail',
            payload: e.target.value
        });
    };

    const handlePassword = (e) => {
        dispatch({
            type: 'setPassword',
            payload: e.target.value
        });
    };


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col '>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleLogin}>
                                    <div className='row'>
                                        <div className='input-field col'>
                                            <input type="email" placeholder='Email' onChange={handleEmail} value={state.email} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field col '>
                                            <input type="password" placeholder='Contraseña' onChange={handlePassword} value={state.password} />
                                        </div>
                                    </div>
                                    <div className='row center'>
                                        <button type="submit" className='btn light-green darken-4'>Biometric Login</button>
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

