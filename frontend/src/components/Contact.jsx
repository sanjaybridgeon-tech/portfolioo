export default function Contact({ info, onEmailClick }) {
    if (!info) return null;

    return (
        <section id="contact" className="container">
            <div className="glass gradient-border" style={{ padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)' }} />
                
                <h2 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 800 }}>Get in Touch</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    Interested in working together or just want to say hi? My inbox is always open.
                </p>
                
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button 
                        onClick={onEmailClick} 
                        className="glass" 
                        style={{ 
                            padding: '1.2rem 4rem', 
                            fontSize: '1.1rem', 
                            fontWeight: 700, 
                            cursor: 'pointer',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            boxShadow: '0 0 30px var(--accent-glow)'
                        }}
                    >
                        Send an Email
                    </button>
                    
                    <a 
                        href={info.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="glass" 
                        style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', fontWeight: 700 }}
                    >
                        LinkedIn
                    </a>
                </div>

                <div style={{ marginTop: '5rem', display: 'flex', gap: '3rem', justifyContent: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                    <a href={info.github} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>GitHub</a>
                    <a href={info.leetcode} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>LeetCode</a>
                </div>
            </div>
        </section>
    )
}
