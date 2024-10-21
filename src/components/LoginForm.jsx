import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import loginUser from "../api/loginUser.jsx";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch( loginUser({ email, password }))
            .then(() => {
                navigate('/profil');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        placeholder="Email"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/><label htmlFor="remember-me">Remember me</label>

                </div>
                <button type="submit" disabled={isLoading} onClick={handleSubmit}>
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
            </form>
            {error && <p><b>{error.status}</b> {error.message}</p>}
        </div>
    )
}

export default LoginForm;
