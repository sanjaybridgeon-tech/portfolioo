export default function Hero({ info, onEmailClick }) {
    return (
        <section id="home" className="container animate-fade-in" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem' }}>
                Hi, I'm <span className="gradient-text">{info.name}</span>
            </h1>
            <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: 'var(--text-muted)', fontWeight: '400' }}>
                {info.title}
            </h2>
            <p style={{
                maxWidth: '600px',
                margin: '2rem auto',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                padding: '0 1rem'
            }}>
                Building modern, responsive, and high-performance web applications with passion.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem', marginBottom: '2rem' }}>
                <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    LinkedIn
                </a>
                <button onClick={onEmailClick} className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', background: 'none', color: 'inherit' }}>
                    Gmail
                </button>
                <a href={info.github} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    GitHub
                </a>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="#projects" className="glass" style={{ padding: '0.8rem 2rem', background: 'var(--primary-color)', color: 'white', border: 'none' }}>
                    View My Work
                </a>
                <a href="#contact" className="glass" style={{ padding: '0.8rem 2rem' }}>
                    Contact Me
                </a>
            </div>
        </section>
    )
}
