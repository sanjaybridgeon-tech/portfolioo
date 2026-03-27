export default function Hero({ info }) {
    return (
        <section id="home" className="container" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            paddingTop: '4rem'
        }}>
            <div style={{ maxWidth: '800px' }}>
                <p className="text-xs" style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    [SOFTWARE_ENGINEERING_STRATEGY]
                </p>
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
                    lineHeight: 1.05,
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    letterSpacing: '-2px'
                }}>
                    Backend Engineer focused on building scalable, maintainable systems.
                </h1>
                <p style={{ 
                    fontSize: '1.1rem', 
                    color: 'var(--text-muted)', 
                    fontWeight: 400,
                    maxWidth: '650px',
                    lineHeight: '1.6',
                    marginBottom: '2.5rem'
                }}>
                    Specialized in distributed architecture and advanced Spring Boot ecosystems. 
                    Obsessed with system reliability and clean architectural boundaries.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#projects" className="btn">
                        Review Engineering Projects
                    </a>
                    <a href="#contact" className="btn" style={{ background: 'transparent' }}>
                        Establish Contact
                    </a>
                </div>
            </div>

            <div style={{ 
                marginTop: '5rem',
                padding: '1.5rem 0',
                borderTop: '1px solid var(--surface-border)',
                display: 'flex',
                gap: '3rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
            }}>
                <span>JAVA_17+</span>
                <span>SPRING_BOOT</span>
                <span>POSTGRESQL</span>
                <span>DOCKER_CONTAINER</span>
            </div>
        </section>
    )
}
