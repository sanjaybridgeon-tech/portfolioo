export default function Hero({ info }) {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-color)'
        }}>
            {/* LARGE BACKGROUND TEXT */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(8rem, 25vw, 30rem)',
                fontFamily: 'var(--font-heading)',
                color: 'rgba(232, 224, 209, 0.05)',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                zIndex: 0,
                textAlign: 'center',
                width: '100%'
            }}>
                PORTFOLIO
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
                <div style={{ order: window.innerWidth <= 768 ? 2 : 1 }}>
                    <span className="section-num">01 / INTRODUCTION</span>
                    <h1 style={{ 
                        fontSize: 'clamp(4rem, 10vw, 8.5rem)', 
                        lineHeight: 0.8,
                        marginBottom: '2rem',
                        fontWeight: 400,
                        color: 'var(--text-main)',
                    }}>
                        {info.name.split(' ')[0]} <br />
                        <span style={{ color: 'var(--accent-brown)' }}>{info.name.split(' ')[1]}</span>
                    </h1>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: 'var(--text-muted)', 
                        fontWeight: 300,
                        maxWidth: '500px',
                        lineHeight: '1.7',
                        marginBottom: '3rem',
                        fontFamily: 'var(--font-body)'
                    }}>
                        Systems Engineer focused on building high-reliability backend architectures and distributed Spring Boot ecosystems. 
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#projects" className="btn">VIEW_ARCHITECTURE</a>
                        <a href="#contact" className="btn" style={{ border: 'none', borderBottom: '1px solid var(--text-muted)', padding: '1rem 0' }}>EXECUTE_CONTACT</a>
                    </div>
                </div>

                <div style={{ 
                    order: window.innerWidth <= 768 ? 1 : 2,
                    position: 'relative',
                    height: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ 
                        width: '1000%', 
                        maxWidth: '450px', 
                        height: '100%', 
                        background: 'var(--surface)',
                        backgroundImage: `url('/profile.jpg')`, /* User needs to place his photo here */
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid var(--surface-border)',
                        filter: 'grayscale(100%) brightness(0.9)',
                        transition: 'filter 0.5s ease'
                    }} 
                    onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%) brightness(1)'}
                    onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%) brightness(0.9)'}
                    />
                    {/* Decorative Rectangles */}
                    <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', border: '1px solid var(--accent-brown)', zIndex: -1 }} />
                </div>
            </div>

            <div style={{ 
                position: 'absolute', 
                bottom: '4rem', 
                left: '2rem', 
                display: 'flex', 
                flexDirection: 'column',
                gap: '1rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-secondary)',
                letterSpacing: '0.3em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase'
            }}>
                <a href={info.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a href={info.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href={info.leetcode} target="_blank" rel="noopener noreferrer">LEETCODE</a>
            </div>
            
            <div style={{ position: 'absolute', bottom: '4rem', right: '2rem', fontFamily: 'var(--font-secondary)', color: 'var(--accent-brown)' }}>
                WWW.PORTFOLIO.SYS
            </div>
        </section>
    )
}
