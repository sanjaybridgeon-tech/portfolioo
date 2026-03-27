export default function Hero({ info, onEmailClick }) {
    return (
        <section id="home" className="container" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            paddingTop: '2rem'
        }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <div className={`badge ${info ? 'badge-live' : 'badge-demo'}`} style={{ marginBottom: '1.5rem' }}>
                    <div className="badge-dot" />
                    Available for Development Roles
                </div>
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
                    lineHeight: 1.1,
                    marginBottom: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)'
                }}>
                    {info.name} <br />
                    <span style={{ color: 'var(--primary-color)' }}>Software Engineer</span>
                </h1>
                <p style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
                    color: 'var(--text-muted)', 
                    fontWeight: 400,
                    maxWidth: '700px',
                    lineHeight: '1.6'
                }}>
                    B.Tech in Electronics & Communication Engineering. Specialized in <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Java, Spring Boot, and React</span>. 
                    Building robust, scalable, and maintainable software systems with engineering precision.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="#projects" className="btn btn-primary">
                    View Technical Projects
                </a>
                <a href="#contact" className="btn btn-outline">
                    Get in Touch
                </a>
            </div>

            <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginTop: '4rem',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
            }}>
                <a href={info.linkedin} target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>LINKEDIN</a>
                <a href={info.github} target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>GITHUB</a>
                <a href={info.leetcode} target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid transparent' }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>LEETCODE</a>
            </div>
        </section>
    )
}
