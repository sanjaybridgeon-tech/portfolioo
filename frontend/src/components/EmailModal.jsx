import { useState } from 'react';

export default function EmailModal({ email, isOpen, onClose }) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
        }} onClick={onClose}>
            <div className="glass" style={{
                padding: '2.5rem',
                width: '90%',
                maxWidth: '400px',
                textAlign: 'center',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Email Address</h3>
                <div style={{
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    wordBreak: 'break-all',
                    color: 'var(--primary-color)',
                    fontWeight: '500'
                }}>
                    {email}
                </div>
                <button
                    className="glass"
                    onClick={handleCopy}
                    style={{
                        padding: '0.8rem 2.5rem',
                        background: copied ? '#4CAF50' : 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        width: '100%',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {copied ? 'Copied!' : 'Copy Email'}
                </button>
            </div>
        </div>
    );
}
