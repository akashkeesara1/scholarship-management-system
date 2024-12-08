import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: '0',
            backgroundColor: '#f0f4f8',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '3rem',
            color: '#007bff',
            animation: 'fadeIn 2s',
        },
        subtitle: {
            fontSize: '1.5rem',
            color: '#333',
            margin: '1rem 0',
            animation: 'slideIn 2s',
        },
        buttonContainer: {
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
        },
        button: {
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#007bff',
            animation: 'zoomIn 1.5s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        '@keyframes slideIn': {
            from: { transform: 'translateY(-20px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
        },
        '@keyframes zoomIn': {
            from: { transform: 'scale(0.8)', opacity: 0 },
            to: { transform: 'scale(1)', opacity: 1 },
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to the Student Scholarship Management System</h1>
            <p style={styles.subtitle}>Your gateway to managing and applying for scholarships seamlessly.</p>
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={() => navigate('/signup')}
                >
                    Signup
                </button>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={() => navigate('/login')}
                >
                    Signin
                </button>
            </div>
        </div>
    );
}

export default Home;
