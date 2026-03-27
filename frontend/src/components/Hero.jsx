export default function Hero({ info, onEmailClick }) {
    return (
        <section id="home" className="container animate-fade-in" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div style={{ marginBottom: '2rem' }}>
                <span className="badge badge-live" style={{ display: 'inline-flex', marginBottom: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary-color)', padding: '0.4rem 1rem' }}>
                    Available for New Opportunities
                </span>
                <h1 style={{ 
                    fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', 
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '-0.06em'
                }}>
                    Engineering <br />
                    <span className="gradient-text">Elite Digital</span> <br />
                    Experiences
                </h1>
                <h2 style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                    color: 'var(--text-muted)', 
                    fontWeight: 400,
                    maxWidth: '800px',
                    margin: '0 auto',
                    letterSpacing: '0.02em'
                }}>
                    Specialized in <span style={{ color: 'white', fontWeight: 600 }}>Full-Stack Development</span> & <span style={{ color: 'white', fontWeight: 600 }}>Scaleable Architecture</span>
                </h2>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
                <a href="#projects" className="glass" style={{ 
                    padding: '1rem 3rem', 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 0 40px var(--accent-glow)'
                }}>
                    Explore Projects
                </a>
                <a href="#contact" className="glass" style={{ 
                    padding: '1rem 3rem',
                    fontWeight: 600,
                    fontSize: '1rem'
                }}>
                    Let's Connect
                </a>
            </div>

            <div style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                justifyContent: 'center', 
                marginTop: '5rem',
                opacity: 0.5
            }}>
                <a href={info.linkedin} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>LinkedIn</a>
                <a href={info.github} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>GitHub</a>
                <a href={info.leetcode} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>LeetCode</a>
            </div>
        </section>
    )
}
