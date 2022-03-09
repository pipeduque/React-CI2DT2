import React, { useReducer } from "react";

const initialState = {
    email: '',
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

    const handleLogin = (e) => {

        fetch('/login', {
            method: 'PUT',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: "Modificando usuario" });
            })
            .catch(err => {
                M.toast({ html: err });
                M.toast({ html: "error" });
                console.error(err);
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
            <meta name="xm-bind-id-client_id" content="033024c4.6ed1f6ae.tid_385f9417.bindid.io" />
            <meta name="xm-bind-id-redirect_uri" content="http://localhost:3000/Register" />

            <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries"></script>
            <script src="https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js" defer></script>

            <div className='container'>
                <div className='row'>
                    <div className='col '>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleLogin}>
                                    <div className='row'>
                                        <div className='input-field col'>
                                            @
                                            <input type="text" placeholder='Email' onChange={handleEmail} value={state.email} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field col '>
                                            <input type="text" placeholder='Contraseña' onChange={handlePassword} />
                                        </div>
                                    </div>
                                    <div className='row center'>
                                        <button type="submit" className='xm-bind-id-button btn light-green darken-4'>Biometric Login</button>
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