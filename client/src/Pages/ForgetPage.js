import React, { useState } from 'react';
import '../Styles/forget.css';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        console.log('Email submitted:', email);
        console.log('New Password submitted:', newPassword);
        setError('');
        alert('Successfully updated');
    };

    return (
        <div className="forget-password-container">
            <form className="forget-password-form" onSubmit={handleSubmit}>
                <h2>Forget Password</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">New Password</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="submit-button-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ForgetPassword;
