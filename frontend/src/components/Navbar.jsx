import { useState, useEffect } from 'react';

export default function Navbar({ dataSource }) {
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
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
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
                padding: isScrolled ? '0.8rem 2rem' : '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 1000,
                background: isScrolled ? 'rgba(9, 9, 11, 0.95)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#home" style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'white' }}>
                    SANJAY A.
                </a>
                
                {/* Minimalist Data Status */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.7rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--text-muted)',
                    background: 'var(--surface)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid var(--surface-border)'
                }}>
                    <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        background: dataSource === 'live' ? '#10b981' : '#f59e0b' 
                    }} />
                    {dataSource === 'live' ? 'DB_CONNECTED' : 'MOCK_DATA_LOCAL'}
                </div>
            </div>

            {!isMobile && (
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map(item => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            style={{ 
                                fontSize: '0.85rem', 
                                fontWeight: 500, 
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
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)' }}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
