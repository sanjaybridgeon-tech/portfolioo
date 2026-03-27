import { useState } from 'react';

export default function LoginPage({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
            const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                onLogin();
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('Failed to connect to backend');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'var(--primary-color)', opacity: 0.1, filter: 'blur(100px)', zIndex: -1 }} />
            
            <div className="glass gradient-border animate-fade-in" style={{ padding: '3.5rem', width: '100%', maxWidth: '450px' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Access Portal</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Welcome back, Sanjay. Please identify yourself.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                        <input
                            type="email"
                            required
                            className="glass"
                            style={{ padding: '1rem', color: 'white' }}
                            placeholder="admin@example.com"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Key</label>
                        <input
                            type="password"
                            required
                            className="glass"
                            style={{ padding: '1rem', color: 'white' }}
                            placeholder="••••••••"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </div>
                    
                    {error && (
                        <div style={{ padding: '0.8rem', borderRadius: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontSize: '0.85rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="glass"
                        style={{
                            padding: '1.1rem',
                            marginTop: '1rem',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            fontSize: '1rem',
                            boxShadow: '0 0 20px var(--accent-glow)',
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Authenticating...' : 'Establish Secure Connection'}
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => window.location.href = '/'}
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem', marginTop: '1rem' }}
                    >
                        ← Return to Portfolio
                    </button>
                </form>
            </div>
        </div>
    );
}
