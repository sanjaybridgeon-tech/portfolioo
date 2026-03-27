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
                setError('Invalid credentials_set');
            }
        } catch (err) {
            setError('Backend_connection_fault');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="card" style={{ padding: '3.5rem', width: '100%', maxWidth: '450px' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Administrative Identification</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>[SECURE_ACCESS_REQUIRED]</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Identifier</label>
                        <input
                            type="email"
                            required
                            className="card"
                            style={{ padding: '0.8rem', color: 'white', borderRadius: '4px', background: 'rgba(255,255,255,0.02)' }}
                            placeholder="user_id@domain.com"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Security Key</label>
                        <input
                            type="password"
                            required
                            className="card"
                            style={{ padding: '0.8rem', color: 'white', borderRadius: '4px', background: 'rgba(255,255,255,0.02)' }}
                            placeholder="••••••••"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </div>
                    
                    {error && (
                        <div style={{ padding: '0.6rem', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.05)', color: '#ef4444', fontSize: '0.8rem', border: '1px solid rgba(239, 68, 68, 0.2)', fontFamily: 'var(--font-mono)' }}>
                            ERR: {error.toUpperCase()}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary"
                        style={{
                            padding: '1rem',
                            marginTop: '1rem',
                            justifyContent: 'center'
                        }}
                    >
                        {loading ? 'AUTHENTICATING...' : 'ESTABLISH_SESSION'}
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => window.location.href = '/'}
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem', marginTop: '1rem', fontFamily: 'var(--font-mono)' }}
                    >
                        [RETURN_TO_PORTFOLIO]
                    </button>
                </form>
            </div>
        </div>
    );
}
