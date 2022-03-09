import React, { useReducer, useEffect } from "react";


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
    password: '',
    users: [],
    _id: ''
};

function reducer(state, action) {
    switch (action.type) {

        case 'setFirstName':
            return {
                ...state,
                firstName: action.payload
            };

        case 'setLastName':
            return {
                ...state,
                lastName: action.payload
            };

        case 'setEmail':
            return {
                ...state,
                email: action.payload
            };

        case 'setCellphone':
            return {
                ...state,
                cellphone: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'clearData':
            return {
                ...state,
                _id: '',
                firstName: '',
                lastName: '',
                email: '',
                cellphone: '',
                password: ''
            };
        case 'fillData':
            return {
                ...state,
                users: action.payload
            };

        case 'edit':
            return {
                ...state,
                _id: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                cellphone: action.payload.cellphone,
                password: action.payload.password
            };
    }
}


export default function Register() {

    const [state, dispatch] = useReducer(reducer, initialState);


    function fetchUser() {
        fetch('/register')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "fillData",
                    payload: data
                });
            });
    }

    useEffect(() => {

        fetch('/register')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "fillData",
                    payload: data
                });
            });
        console.log("Componente montado");
    }, [false]);

    const handleRegister = (e) => {

        if (state._id) {

            fetch(`/register/${state._id}`, {
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
                    M.toast({ html: 'Usuario modificado' });
                    dispatch({
                        type: 'clearData'
                    });
                    fetchUser();
                });
        } else {
            fetch('/register', {
                method: 'PUT',
                body: JSON.stringify(state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({ html: "Bienvenido" });
                    dispatch({
                        type: 'clearData'
                    });
                    fetchUser();
                })
                .catch(err => {
                    M.toast({ html: "Completa los campos obligatorios" });
                    console.error(err)
                });

            console.log(state);
        };

        e.preventDefault();
    }

    function handleDelete(id) {

        if (confirm('Eliminar usuario?')) {
            fetch(`/register/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    fetchUser();
                    M.toast({ html: "Usuario eliminado" });
                })
                .catch(err => {
                    M.toast({ html: err });
                    console.error(err);
                });
        }
    };

    function handleEdit(id) {

        fetch(`/register/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({ html: "Modificando usuario" });
                dispatch({
                    type: "edit",
                    payload: data
                });
            })
            .catch(err => {
                M.toast({ html: err });
                console.error(err);
            });

    };

    const handleFirstName = (e) => {
        dispatch({
            type: 'setFirstName',
            payload: e.target.value
        });
    };

    const handleLastName = (e) => {
        dispatch({
            type: 'setLastName',
            payload: e.target.value
        });
    };

    const handleEmail = (e) => {
        dispatch({
            type: 'setEmail',
            payload: e.target.value
        });
    };

    const handleCellphone = (e) => {
        dispatch({
            type: 'setCellphone',
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

            <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries"></script>
            <script src="https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js" defer></script>

            <div className='container'>
                <div className='row'>
                    <div className='col s5'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleRegister}>
                                    <div className='row'>
                                        <div className='input-field cols12'>
                                            <input type="text" placeholder='Nombres' onChange={handleFirstName} value={state.firstName} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field cols12'>
                                            <input type="text" placeholder='Apellidos' onChange={handleLastName} value={state.lastName} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field cols12'>
                                            <input type="email" placeholder='Email' onChange={handleEmail} value={state.email} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field cols12'>
                                            <input type="number" placeholder='Celular' onChange={handleCellphone} value={state.cellphone} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field cols12'>
                                            <input type="password" placeholder='Contraseña' onChange={handlePassword} value={state.password} />
                                        </div>
                                    </div>
                                    <button type="submit" className='btn light-green darken-4'>
                                        Registrarse
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col s7'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Celular</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.map(user => {
                                        return (
                                            <tr key={user._id}>
                                                <td>{user.firstName + ' ' + user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.cellphone}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(user._id)} className="btn light-green darken-2">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button onClick={() => handleDelete(user._id)} className="btn light-green darken-4" style={{ margin: '4px' }}>
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}