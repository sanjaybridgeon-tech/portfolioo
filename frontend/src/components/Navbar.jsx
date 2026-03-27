import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);
        checkMobile();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Sytems', href: '#focus' },
        { name: 'Skills', href: '#skills' },
        { name: 'Exp', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isScrolled ? '1rem 1.5rem' : '1.5rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 1000,
                background: isScrolled ? 'rgba(11, 15, 20, 0.95)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
                backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                transition: 'all 0.2s ease'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#home" style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', color: 'white', fontFamily: 'var(--font-mono)' }}>
                    SANJAY_A.SYS
                </a>
            </div>

            {!isMobile && (
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map(item => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            style={{ 
                                fontSize: '0.75rem', 
                                fontWeight: 500, 
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--text-muted)',
                                transition: 'color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}

            {isMobile && (
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            )}

            {isMobile && isOpen && (
                <div 
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        background: 'var(--bg-color)',
                        borderBottom: '1px solid var(--surface-border)'
                    }}
                >
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
