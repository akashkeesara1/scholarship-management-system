import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login attempted with Email: ${email} and Password: ${password}`);
        // Add authentication logic here
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f4f8',
            fontFamily: 'Arial, sans-serif',
        },
        form: {
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '300px',
        },
        title: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#007bff',
        },
        input: {
            width: '100%',
            padding: '0.8rem',
            margin: '0.5rem 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
        },
        button: {
            width: '100%',
            padding: '0.8rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        link: {
            display: 'block',
            marginTop: '1rem',
            textAlign: 'center',
            color: '#007bff',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Login</h2>
                <input
                    type="email"
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Login
                </button>
                <a href="/signup" style={styles.link}>Don't have an account? Sign up</a>
            </form>
        </div>
    );
}

export default Login;
