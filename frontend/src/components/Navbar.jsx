import { useState, useEffect } from 'react';

export default function Navbar({ dataSource }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
            className="glass" 
            style={{
                position: 'fixed',
                top: isMobile ? '0' : '1.5rem',
                left: isMobile ? '0' : '50%',
                transform: isMobile ? 'none' : 'translateX(-50%)',
                width: isMobile ? '100%' : 'auto',
                padding: isMobile ? '1rem 1.5rem' : '0.6rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                zIndex: 1000,
                borderRadius: isMobile ? '0' : '100px',
                border: isMobile ? 'none' : '1px solid var(--glass-border)',
                borderBottom: isMobile ? '1px solid var(--glass-border)' : '1px solid var(--glass-border)',
                background: isScrolled || isMobile ? 'rgba(3, 0, 20, 0.8)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="#home" className="gradient-text" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.05em' }}>
                    SANJAY.
                </a>
                
                {/* Data Source Badge */}
                <div className={`badge ${dataSource === 'live' ? 'badge-live' : 'badge-demo'}`}>
                    <div className="badge-dot" />
                    {dataSource === 'live' ? 'Live Database' : 'Demo Mode'}
                </div>
            </div>

            {!isMobile && (
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {navItems.map(item => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.7 }}
                            onMouseEnter={(e) => e.target.style.opacity = 1}
                            onMouseLeave={(e) => e.target.style.opacity = 0.7}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}

            {isMobile && (
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            )}

            {isMobile && isOpen && (
                <div 
                    className="glass"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderRadius: '0 0 1rem 1rem'
                    }}
                >
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
