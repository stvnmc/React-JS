import React, { useState } from 'react'

const LoginUseState = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await function login({ username, password }) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (username === 'admin' && password === 'a') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 2000)
                })
            }
            setIsLoggedIn(false);
            setIsLoggedIn(true);
        } catch (error) {
            setError(`Invalid Username or Password: ${error}`);
            setLoading(false);
            setUsername('');
            setPassword('');
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setLoading(false);
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>
                                Welcome,{username}!
                            </h1>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit}>
                            {
                                error && <p>{error}</p>
                            }
                            <input
                                type='text'
                                placeholder='username'
                                value={username}
                                onChange={(e) => setUsername(e.currentTarget.value)}
                            />
                            <input
                                type='text'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                            />
                            <button>
                                {isLoading ? 'Loggin....' : 'Login'}
                            </button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}


export default LoginUseState