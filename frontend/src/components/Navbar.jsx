import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: isMobile ? '0' : '1.5rem',
            left: isMobile ? '0' : '50%',
            transform: isMobile ? 'none' : 'translateX(-50%)',
            width: isMobile ? '100%' : 'max-content',
            padding: isMobile ? '1rem 1.5rem' : '0.75rem 2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? (isOpen ? '1.5rem' : '0') : '2rem',
            zIndex: 1000,
            margin: isMobile ? '0' : '0 auto',
            borderRadius: isMobile ? '0' : '1rem',
            transition: 'all 0.4s ease',
            maxHeight: isMobile ? (isOpen ? '100vh' : '4.5rem') : 'auto',
            overflow: 'hidden',
            alignItems: isMobile ? 'flex-start' : 'center',
            borderTop: isMobile ? 'none' : '1px solid var(--glass-border)',
            borderLeft: isMobile ? 'none' : '1px solid var(--glass-border)',
            borderRight: isMobile ? 'none' : '1px solid var(--glass-border)',
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {isMobile && (
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }} className="gradient-text">Portfolio</span>
                )}
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-main)',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            padding: '0.5rem'
                        }}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                )}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '1.5rem' : '2rem',
                width: isMobile ? '100%' : 'auto',
                opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                padding: isMobile ? (isOpen ? '1rem 0' : '0') : '0',
                transition: 'opacity 0.3s ease'
            }}>
                {navItems.map(item => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => isMobile && setIsOpen(false)}
                        style={{
                            fontSize: isMobile ? '1.1rem' : '1rem',
                            padding: isMobile ? '0.5rem 0' : '0',
                            borderBottom: isMobile ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            width: isMobile ? '100%' : 'auto'
                        }}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
