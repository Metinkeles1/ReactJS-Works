import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [message, setMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        setIsRegistered(true);
        setMessage('Kayıt başarılı! Giriş yapabilirsiniz.');
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (isRegistered && username === 'admin' && password === 'password') {
            setMessage('Giriş başarılı!');
        } else {
            setMessage('Geçersiz kullanıcı adı veya şifre!');
        }
    };

    const handleLogout = () => {
        setIsRegistered(false);
        setUsername('');
        setPassword('');
        setMessage('');
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h1 className="text-center mb-4">Instagram</h1>
                    <form onSubmit={isRegistered ? handleLogin : handleRegistration}>
                        <div className="mb-3">
                            <input type="text" id="username" className="form-control" placeholder="Kullanıcı Adı" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="password" className="form-control" placeholder="Şifre" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Giriş Yap</button>
                        </div>
                    </form>
                    {isRegistered && (
                        <button onClick={handleLogout} className="btn btn-secondary mt-3">Çıkış Yap</button>
                    )}
                    {message && (
                        <div className="alert alert-info mt-3">{message}</div>
                    )}
                    <p className="text-center mt-3">Hesabınız yok mu? <a href="#">Kaydolun</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
